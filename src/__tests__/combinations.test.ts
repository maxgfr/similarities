import { combinations } from '../combinations';

describe('Combinatorics', () => {
  it('should work', () => {
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

  it('should work', () => {
    const result = combinations(['a', 'b', 'c', 'd']);
    expect(result).toHaveLength(15);
  });
});
