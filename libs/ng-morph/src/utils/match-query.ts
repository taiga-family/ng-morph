import {minimatch} from 'minimatch';
import type {Structure, WriterFunction} from 'ts-morph';

import {coerceArray} from './coerce-array';

// если массив, то берем его тип и возвращаем
// иначе возвращаем переданный тип
type FlatType<T> = T extends Array<infer R> ? R : T;

// если тип never[], то вернется never
type NeverIfIsNeverArray<T> = T extends never[] ? never : T;

// пытаемся достать примитивы если они допустимы при определении в структурах
type ExtractPrimitive<T> = Extract<
    FlatType<Exclude<T, WriterFunction>>,
    boolean | number | string
>;

/**
 * Делаем из объекта пригодный объект для поиска
 *
 * @example
 * // Тип
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

export function matchQuery<T extends Structure>(value: T, query?: Query<T>): boolean {
    return (
        !query ||
        Object.keys(query).every(key =>
            coerceArray(value[key])
                .map(coerceName)
                .some(v => {
                    const patterns = coerceArray(query[key]);

                    return typeof v === 'string'
                        ? patterns.some(pattern => pattern && minimatch(v, pattern))
                        : patterns.includes(v);
                }),
        )
    );
}
