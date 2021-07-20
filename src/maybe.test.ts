import {just, Maybe, Nothing} from './maybe';
import {double} from './utils';

describe('maybe', () => {
    test('Just 5 equals Just 5', () => {
       expect(just(5).equals(just(5))).toBe(true);
    })

    test('Just 5 does not equal Nothing', () => {
        expect(just(5).equals(Nothing)).toBe(false);
    })

    test('Nothing equals Nothing', () => {
        expect(Nothing.equals(Nothing)).toBe(true);
    })

    test('doubling of Just 5 equals Just 10', () => {
        expect(Maybe.of(5).map(double).equals(Maybe.of(10))).toBe(true);
    })

    test('doubling of Nothing equals Nothing', () => {
        expect(Nothing.map(double).equals(Nothing)).toBe(true);
    })
})