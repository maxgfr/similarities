import { pearsonCorrelationNumber, pearsonCorrelationString } from '../pearson';

describe('Pearson', () => {
  describe('pearsonCorrelationNumber', () => {
    it.each`
      arrayA                  | arrayB                  | result
      ${[1, 2, 3, 4, 5]}      | ${[1, 2, 3, 4, 5]}      | ${1}
      ${[1, 2, 3, 4, 5]}      | ${[5, 4, 3, 2, 1]}      | ${-1}
      ${[1, 2, 3, 4, 5]}      | ${[1, 2, 3, 4, 6]}      | ${0.9863939238321437}
      ${[21, 54, 60, 78, 82]} | ${[20, 54, 54, 65, 45]} | ${0.7843790001900488}
    `('should work with number', ({ arrayA, arrayB, result }) => {
      expect(pearsonCorrelationNumber(arrayA, arrayB)).toBe(result);
    });

    it('should return 0 when all values are identical (no variance)', () => {
      const result = pearsonCorrelationNumber([5, 5, 5], [10, 10, 10]);
      expect(result).toBe(0);
    });

    it('should throw error for empty arrays', () => {
      expect(() => pearsonCorrelationNumber([], [])).toThrow(
        'Datasets cannot be empty',
      );
    });

    it('should throw error for null datasets', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      expect(() => pearsonCorrelationNumber(null as any, [1, 2])).toThrow(
        'Datasets cannot be null or undefined',
      );
    });

    it('should throw error for arrays with different lengths', () => {
      expect(() => pearsonCorrelationNumber([1, 2], [1, 2, 3])).toThrow(
        'The datasets must have the same length',
      );
    });
  });

  describe('pearsonCorrelationString', () => {
    it.each`
      arrayA                                                                   | arrayB                                                                   | result
      ${['voiture', 'maison', 'chien', 'chat', 'pomme', 'banane', 'orange']}   | ${['voiture', 'maison', 'poisson', 'chat', 'pomme', 'banane', 'orange']} | ${0.9699752721994226}
      ${['voiture', 'maison', 'poisson', 'chat', 'pomme', 'banane', 'orange']} | ${['voiture', 'maison', 'chien', 'chat', 'pomme', 'banane', 'orange']}   | ${0.9699752721994226}
      ${['a', 'b', 'c', 'd', 'e', 'f', 'g']}                                   | ${['a', 'b', 'c', 'd', 'e', 'f', 'g']}                                   | ${1}
      ${['a', 'b', 'c', 'd', 'e', 'f', 'g']}                                   | ${['g', 'f', 'e', 'd', 'c', 'b', 'a']}                                   | ${-1}
      ${['a', 'b', 'c', 'd', 'e', 'f', 'g']}                                   | ${['voiture', 'maison', 'poisson', 'chat', 'pomme', 'banane', 'orange']} | ${-0.5248621914711237}
    `('should work with string', ({ arrayA, arrayB, result }) => {
      expect(pearsonCorrelationString(arrayA, arrayB)).toBe(result);
    });

    it('should return 0 when all values are identical (no variance)', () => {
      const result = pearsonCorrelationString(
        ['same', 'same', 'same'],
        ['different', 'different', 'different'],
      );
      expect(result).toBe(0);
    });

    it('should throw error for empty arrays', () => {
      expect(() => pearsonCorrelationString([], [])).toThrow(
        'Arrays cannot be empty',
      );
    });

    it('should throw error for null arrays', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      expect(() => pearsonCorrelationString(null as any, ['a', 'b'])).toThrow(
        'Arrays cannot be null or undefined',
      );
    });

    it('should throw error for arrays with different lengths', () => {
      expect(() => pearsonCorrelationString(['a', 'b'], ['a', 'b', 'c'])).toThrow(
        'The arrays must have the same length',
      );
    });
  });
});
