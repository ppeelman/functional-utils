// SETOID
// equals :: Setoid a => a ~> a -> Boolean
//
// Sources:
// - https://github.com/fantasyland/fantasy-land#setoid
// - http://www.tomharding.me/2017/03/09/fantas-eel-and-specification-3/

import {hasMethod} from './utils';

export interface Setoid<T = any> {
    equals: (v: this) => boolean;
}

export const isSetoid = (v: any): v is Setoid => hasMethod(v, 'equals');