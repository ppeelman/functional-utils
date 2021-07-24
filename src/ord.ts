import {hasMethod} from './utils';
import {Setoid} from './setoid';

// ORD
// lte :: Ord a => a ~> a -> Boolean
//
// Sources
// - https://github.com/fantasyland/fantasy-land#ord
// - http://www.tomharding.me/2017/04/09/fantas-eel-and-specification-3.5/

export interface Ord<T = any> extends Setoid<T>{
    lte: (v: this) => boolean;
}

export const isOrd = (v: any): v is Ord<any> => hasMethod(v, 'lte');

export const lte = <T = any>(x: Ord<T>, y: Ord<T>): boolean => x.lte(y);
export const lt = <T = any>(x: Ord<T>, y: Ord<T>): boolean => x.lte(y) && !x.equals(y);
export const gt = <T = any>(x: Ord<T>, y: Ord<T>): boolean => !x.lte(y);
export const gte = <T = any>(x: Ord<T>, y: Ord<T>): boolean => !lt(x, y);
