export function sum(...numbers: number[]): number {
    // Check out if all the numbers are integers
    if (!numbers.every(Number.isInteger)) {
        throw new Error('All the numbers must be integers!');
    }
    return numbers.reduce((sum, number) => sum + number, 0);
}