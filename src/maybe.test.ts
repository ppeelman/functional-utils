import {Just, Nothing} from './maybe';

describe('maybe', () => {
    test('Just of 5 equals Just of 5', () => {
       expect(Just.of(5).equals(Just.of(5))).toBe(true);
    })


    test('Just of 5 does not equal Nothing', () => {
        expect(Just.of(5).equals(Nothing)).toBe(false);
    })
})