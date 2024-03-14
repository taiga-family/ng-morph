export type FilterPrimitive<T> = {
    [key in keyof T]: Extract<
        T[key],
        boolean[] | number[] | string[] | boolean | number | string
    >;
};
