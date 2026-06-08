export type Pattern = string[] | string;

export function isNegativeGlobPattern(pattern: string): boolean {
    return pattern.startsWith('!') && !pattern.startsWith('!(');
}
