import pull = require("..");

/**
 * Create a SourceStream that reads the values from an array or object and then stops.
 */
declare function values<T>(
    arrayOrObject?: Record<any, T> | readonly T[],
    onAbort?: (err?: pull.EndOrError) => unknown,
): pull.Source<T>;
export = values;
