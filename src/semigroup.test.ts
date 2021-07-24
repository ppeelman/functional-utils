import {fold, Product, Sum} from './semigroup';

describe('Sum', () => {
    test('Sum of 2 and 3 is 5', () => {
        expect(Sum.of(2).concat(Sum.of(3)).value).toBe(5)
    })

    test('Folding array of [2, 3, 4] returns 9', () => {
        expect(fold(Sum, [2, 3, 4])).toBe(9)
    })
})

describe('Product', () => {
    test('Product of 2 and 3 is 6', () => {
        expect(Product.of(2).concat(Product.of(3)).value).toBe(6)
    })
})
