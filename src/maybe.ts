import {isNullOrUndefined} from './utils';
import {Ord, Setoid} from './algebras';

// More complex alternative(s):
// https://github.com/sanctuary-js/sanctuary-maybe

export interface IMaybe<T> extends Setoid<Maybe<T>> {
    map<K = any>(fn: (v: T) => K): Maybe<K>;
}

export abstract class Maybe<T> implements IMaybe<T>{
   protected constructor() {}

   public static of<K = any>(value: K): Maybe<K> {
       return new Just(value);
   }

   public abstract map<K = any>(fn: (v: T) => K): Maybe<K>;
   public abstract equals(other: Maybe<T>): boolean;
}

class _Nothing extends Maybe<undefined> {
    public constructor() {
        super();
    }

    public map<K = any>(fn: (v: any) => K): Maybe<K> {
        return new _Nothing();
    }

    public equals(other: Maybe<any>): boolean {
        return other instanceof _Nothing;
    }
}

export const Nothing = new _Nothing();

class Just<T> extends Maybe<T> {
    public constructor(private readonly _x: T) {
        super();
    }

    public map<K = any>(fn: (v: T) => K): Maybe<K> {
        const result: K = fn(this._x);
        return isNullOrUndefined(result) ? Nothing : just(result);
    }

    public equals(other: Maybe<T>): boolean {
        return other instanceof Just && this._x === other._x
    }
}

export const just = <T>(value: T) => new Just(value);