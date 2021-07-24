// Semigroup: concat :: Semigroup a => a => a
export interface Semigroup<T = any> {
    value: T;
    concat: (that: this) => this
}

// Monoid: empty :: Monoid m => () => m
export interface Monoid<T = any> extends Semigroup<T> {
    // static empty: () => this
    // We can unfortunately not enforce this by means of a TypeScript interface because static methods cannot be captured with an interface
    // More info: https://stackoverflow.com/a/65847601/11351782
    // For this reason, we work with 2 interfaces: 1) Monoid and 2) MonoidClass
}

interface MonoidClass<T> {
    of: (acc: T) => Monoid<T>;
    empty: () => Monoid<T>;
}

// SUM
export class Sum implements Monoid<number> {
    constructor(public value: number) {}
    public static of = (value: number) => new Sum(value);
    public static empty = (): Sum => Sum.of(0);
    public concat = (that: this): this => Sum.of(this.value + that.value) as this;
}

// PRODUCT
export class Product implements Monoid<number> {
    constructor(public value: number) {}
    public static of = (value: number) => new Product(value);
    public static empty = () => Product.of(1);
    public concat = (that: this): this => Product.of(this.value * that.value) as this;
}

// ANY
export class Any implements Monoid<boolean> {
    constructor(public value: boolean) {}
    public static of = (value: boolean) => new Any(value);
    public static empty = () => Any.of(false);
    public concat = (that: this): this => Any.of(this.value || that.value) as this;
}

export const fold = <T = any>(Monoid: MonoidClass<T>, arr: T[]): T => arr.reduce((acc, curr) => acc.concat(Monoid.of(curr)), Monoid.empty()).value