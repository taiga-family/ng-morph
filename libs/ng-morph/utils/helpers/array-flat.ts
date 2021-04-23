export function arrayFlat<T>(array: T[][]): T[] {
  return array.reduce((agr, current) => agr.concat(current), []);
}
