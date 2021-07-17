import {isNullOrUndefined} from './utils';
import {Setoid} from './algebras';

export interface Maybe<T> extends Setoid<Maybe<T>> {
    map<K = any>(fn: (v: T) => K): Maybe<K>;
}

export class Just<T> implements Maybe<T> {
    private constructor(private readonly _x: T) {}

    public static of<K = any>(v: K): Just<K> {
        return new Just<K>(v);
    }

    public map<K = any>(fn: (v: T) => K): Maybe<K> {
        const result = fn(this._x);
        return isNullOrUndefined(result) ? nothing() : just(result);
    }

    public equals(other: Maybe<T>): boolean {
        return other instanceof Just && this._x === other._x
    }
}

export const Nothing: Maybe<any> = {
    map: (fn: (v: any) => any) => Nothing,
    equals: (v: any) => v === this
}

export const just = <T = any>(v: T) => Just.of(v);
export const nothing = <T = any>() => Nothing;
