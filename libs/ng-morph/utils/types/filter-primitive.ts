export type FilterPrimitive<T> = {
  [key in keyof T]: Extract<
    T[key],
    string | string[] | number | number[] | boolean | boolean[]
  >;
};
