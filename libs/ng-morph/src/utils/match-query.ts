import {minimatch} from 'minimatch';
import {type Structure, type WriterFunction} from 'ts-morph';

import {coerceArray} from './coerce-array';

// if array, extract its type and return it
// otherwise return the passed type
type FlatType<T> = T extends Array<infer R> ? R : T;

// if type is never[], return never
type NeverIfIsNeverArray<T> = T extends never[] ? never : T;

// try to extract primitives if they are allowed in structure definitions
type ExtractPrimitive<T> = Extract<
    FlatType<Exclude<T, WriterFunction>>,
    boolean | number | string
>;

/**
 * Convert an object to a searchable object
 *
 * @example
 * // Type
 * {
 *   named: string;
 *   flag: boolean;
 *   keys: string[]
 *   objects: {}[]
 * }
 *
 * // Query
 *
 * {
 *   named: string | string[];
 *   flag: boolean | boolean[];
 *   keys: string | string[];
 *   objects: never;
 * }
 *
 */
export type Query<T extends Structure> = Partial<{
    [key in keyof T]:
        | ExtractPrimitive<T[key]>
        | NeverIfIsNeverArray<Array<ExtractPrimitive<T[key]>>>;
}>;

function isObject(value: unknown): value is Record<string, unknown> {
    return value !== null && typeof value === 'object';
}

function coerceName<T extends string>(name: T | {name: T}): T {
    if (!isObject(name)) {
        return name;
    }

    return 'name' in name ? name.name : name;
}

export function matchQuery<T extends Structure>(
    value: Record<any, any> | T,
    query?: Query<T> & Record<any, any>,
): boolean {
    return (
        !query ||
        Object.keys(query).every((key) =>
            coerceArray((value as unknown as Record<any, any> | null)?.[key])
                .map(coerceName)
                .some((v: unknown) => {
                    const patterns = coerceArray(query[key]);

                    return typeof v === 'string'
                        ? patterns.some((pattern) => pattern && minimatch(v, pattern))
                        : patterns.includes(v);
                }),
        )
    );
}
