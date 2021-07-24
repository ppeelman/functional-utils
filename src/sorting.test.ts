import {just, Maybe, Nothing} from './maybe';
import {double} from './utils';
import {bubbleSort, mergeSort} from './sorting';

describe('bubble sort', () => {
    test('sorts an array of numbers in ascending order', () => {
        const result = [0, 8, 4, 3, 6, 9];
        const expected = [0, 3, 4, 6, 8, 9];
        expect(bubbleSort(result)).toEqual(expected);
    })
})

// describe('merge sort', () => {
//     test('sorts an array of numbers in ascending order', () => {
//         const result = [0, 8, 4, 3, 6, 9];
//         const expected = [0, 3, 4, 6, 8, 9];
//         expect(mergeSort(result)).toEqual(expected);
//     })
// })