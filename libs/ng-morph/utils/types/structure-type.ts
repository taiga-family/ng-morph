import { Node } from 'ts-morph';

export type StructureType<T> = T extends Node & {
  set(structure: Record<string, unknown>): unknown;
  getStructure(): infer S;
}
  ? S
  : never;
