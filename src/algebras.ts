// 'this' type in TypeScript
// https://levelup.gitconnected.com/typescript-advanced-types-this-type-and-dynamic-types-ecb99c4ec275#:~:text=In%20TypeScript%2C%20we%20can%20use,the%20instance%20of%20a%20class.

export interface Setoid<Type> {
    equals: (v: Type) => boolean;
}

export interface Ord<Type> {
    lte: (v: Type) => boolean;
}