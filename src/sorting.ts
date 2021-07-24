import {gt, isOrd, Ord} from './ord';

// Supports an array of Ords or regular numbers
export const bubbleSort = <T extends Ord | number>(arr: T[]): T[] => {
    let swapped = true;
    const result = [...arr]; // copy array for immutability's sake
    const greaterThan = (x: Ord<T> | number, y: Ord<T> | number) => isOrd(x) && isOrd(y) ? gt(x, y) : x > y

    while (swapped) {
        let i = 0;
        swapped = false;

        while (i < result.length - 1) {
            if (greaterThan(result[i], result[i + 1])) {
                [result[i], result[i + 1]] = [result[i + 1], result[i]];
                swapped = true;
            }

            i++;
        }
    }

    return result;
}

export const mergeSort = <T extends Ord | number>(arr: T[]): T[] => {
    return arr;
}