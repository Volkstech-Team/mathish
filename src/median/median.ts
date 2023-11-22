export function median(...numbers: number[]): number {
    // Check out if all the numbers are integers
    if (!numbers.every(Number.isInteger)) {
        throw new Error('All the numbers must be integers!');
    }
    // Check out if the numbers array is empty
    if (numbers.length === 0) {
        throw new Error('The numbers array must not be empty!');
    }
    // Sort the numbers array
    const sortedNumbers = numbers.sort((a, b) => a - b);
    // Check out if the numbers array has an odd length
    if (sortedNumbers.length % 2 !== 0) {
        return sortedNumbers[Math.floor(sortedNumbers.length / 2)];
    }
    // Check out if the numbers array has an even length
    return (
        (sortedNumbers[sortedNumbers.length / 2 - 1] +
            sortedNumbers[sortedNumbers.length / 2]) /
        2
    );
}