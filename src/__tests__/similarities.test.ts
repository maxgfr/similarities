import { findSimilarities, getPercentOfSimilarities } from '../similarities';

describe('Similarities', () => {
  describe('getPercentOfSimilarities', () => {
    it('should work ', () => {
      const result = getPercentOfSimilarities(['a', 'b', 'c'], ['c', 'd', 'e']);
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
  });
});
