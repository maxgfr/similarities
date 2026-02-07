import { combinations } from '../combinations';

describe('Combinatorics', () => {
  it('should generate all combinations correctly', () => {
    const result = combinations(['a', 'b', 'c']);
    expect(result).toHaveLength(7);
    expect(result).toEqual([
      ['a'],
      ['a', 'b'],
      ['b'],
      ['a', 'c'],
      ['a', 'b', 'c'],
      ['b', 'c'],
      ['c'],
    ]);
  });

  it('should generate correct number of combinations', () => {
    const result = combinations(['a', 'b', 'c', 'd']);
    expect(result).toHaveLength(15);
  });

  it('should handle empty array', () => {
    const result = combinations([]);
    expect(result).toEqual([]);
  });

  it('should handle single element array', () => {
    const result = combinations(['a']);
    expect(result).toEqual([['a']]);
  });

  it('should work with numbers', () => {
    const result = combinations([1, 2]);
    expect(result).toHaveLength(3);
    expect(result).toEqual([[1], [1, 2], [2]]);
  });
});
