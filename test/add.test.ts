import { sum } from '../src';

test('adds two numbers correctly', () => {
  const result = sum(2, -3)
  expect(result).toBe(-1);
});