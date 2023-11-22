import { sum } from "../addition";

export function mean(...numbers: number[]): number {
    // Check out if all the numbers are integers
    if (!numbers.every(Number.isInteger)) {
        throw new Error('All the numbers must be integers!');
    }
    // Return the mean value
    return sum(...numbers) / numbers.length;
}