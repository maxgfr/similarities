import { findSimilarities, getPercentOfSimilarities } from '../similarities';

describe('Similarities', () => {
  describe('getPercentOfSimilarities', () => {
    it('should work ', () => {
      const result = getPercentOfSimilarities(['a', 'b', 'c'], ['c', 'd', 'e']);
      expect(result).toBe(33.33333333333333);
    });

    it('should return 0 for empty arrays', () => {
      const result = getPercentOfSimilarities([], ['a', 'b']);
      expect(result).toBe(0);
    });

    it('should throw error for null arrays', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      expect(() => getPercentOfSimilarities(null as any, ['a'])).toThrow(
        'Arrays cannot be null or undefined',
      );
    });

    it('should throw error for undefined arrays', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      expect(() => getPercentOfSimilarities(['a'], undefined as any)).toThrow(
        'Arrays cannot be null or undefined',
      );
    });

    it('should return 0 when no similarities exist', () => {
      const result = getPercentOfSimilarities(['a', 'b'], ['c', 'd']);
      expect(result).toBe(0);
    });

    it('should return 100 when all elements match', () => {
      const result = getPercentOfSimilarities(['a', 'b'], ['a', 'b']);
      expect(result).toBe(100);
    });

    it('should handle arrays with different lengths correctly', () => {
      const result = getPercentOfSimilarities(['a'], ['a', 'b', 'c']);
      expect(result).toBe(33.33333333333333);
    });
  });

  describe('findSimilarities', () => {
    it('should work', () => {
      const result = findSimilarities(
        ['dog', 'cat', 'bird'],
        ['bird', 'horse', 'tiger'],
      );
      expect(result).toEqual([
        { item: ['bird'], similarities: 33.33333333333333 },
        { item: ['bird', 'cat'], similarities: 33.33333333333333 },
        { item: ['cat'], similarities: 0 },
        { item: ['bird', 'dog'], similarities: 33.33333333333333 },
        { item: ['bird', 'cat', 'dog'], similarities: 33.33333333333333 },
        { item: ['cat', 'dog'], similarities: 0 },
        { item: ['dog'], similarities: 0 },
      ]);
    });

    it('should work with more complexe value', () => {
      const result = findSimilarities(
        ['a', 'b', 'c', 'd'],
        ['c', 'd', 'e', 'f'],
      );
      expect(result).toEqual([
        { item: ['a'], similarities: 0 },
        { item: ['a', 'b'], similarities: 0 },
        { item: ['b'], similarities: 0 },
        { item: ['a', 'c'], similarities: 25 },
        { item: ['a', 'b', 'c'], similarities: 25 },
        { item: ['b', 'c'], similarities: 25 },
        { item: ['c'], similarities: 25 },
        { item: ['a', 'd'], similarities: 25 },
        { item: ['a', 'b', 'd'], similarities: 25 },
        { item: ['b', 'd'], similarities: 25 },
        { item: ['a', 'c', 'd'], similarities: 50 },
        { item: ['a', 'b', 'c', 'd'], similarities: 50 },
        { item: ['b', 'c', 'd'], similarities: 50 },
        { item: ['c', 'd'], similarities: 50 },
        { item: ['d'], similarities: 25 },
      ]);
    });

    it('should not mutate input arrays', () => {
      const arrayA = ['dog', 'cat', 'bird'];
      const arrayB = ['bird', 'horse', 'tiger'];
      const originalA = [...arrayA];
      const originalB = [...arrayB];

      findSimilarities(arrayA, arrayB);

      expect(arrayA).toEqual(originalA);
      expect(arrayB).toEqual(originalB);
    });

    it('should throw error for null arrays', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      expect(() => findSimilarities(null as any, ['a'])).toThrow(
        'Arrays cannot be null or undefined',
      );
    });

    it('should handle empty arrays', () => {
      const result = findSimilarities([], []);
      expect(result).toEqual([]);
    });
  });
});
