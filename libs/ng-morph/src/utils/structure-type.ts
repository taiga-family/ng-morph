import type {Node, StructureKind, WriterFunction} from 'ts-morph';

export type StructureType<T> = T extends Node & {
    set(structure: Record<string, unknown>): unknown;
    getStructure(): infer S;
}
    ? S & {
          name?: string;
          kind?: StructureKind;
          leadingTrivia?: Array<WriterFunction | string> | WriterFunction | string;
          trailingTrivia?: Array<WriterFunction | string> | WriterFunction | string;
      }
    : never;
