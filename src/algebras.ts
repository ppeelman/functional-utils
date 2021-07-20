// SETOID
// equals :: Setoid a => a ~> a -> Boolean
//
// Sources:
// - https://github.com/fantasyland/fantasy-land#setoid
// - http://www.tomharding.me/2017/03/09/fantas-eel-and-specification-3/

import {hasMethod} from './utils';

export interface Setoid<T> {
    equals: (v: T) => boolean;
}

export const isSetoid = (v: any): v is Setoid<any> => hasMethod(v, 'equals')

// ORD
// lte :: Ord a => a ~> a -> Boolean
//
// Sources
// - https://github.com/fantasyland/fantasy-land#ord
// - http://www.tomharding.me/2017/04/09/fantas-eel-and-specification-3.5/

export interface Ord<T> {
    lte: (v: T) => boolean;
}

export const isOrd = (v: any): v is Ord<any> => hasMethod(v, 'lte')