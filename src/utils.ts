export const isNull = (v: any): boolean => v === null
export const isUndefined = (v: any): boolean => v === undefined;
export const isNullOrUndefined = (v: any): boolean => isNull(v) || isUndefined(v)

export const isFunction = (v: any): boolean => typeof v === 'function'

export const isObject = (v: any): boolean => typeof v === 'object' && v !== null

export const hasMethod = (v: any, methodName: string): boolean => isFunction(v?.[methodName])

export const double = (num: number): number => num * 2;