import { combinations } from './combinations';

export function getPercentOfSimilarities<T>(arrayA: T[], arrayB: T[]): number {
  // Validate inputs
  if (!arrayA || !arrayB) {
    throw new Error('Arrays cannot be null or undefined');
  }
  if (arrayA.length === 0 || arrayB.length === 0) {
    return 0;
  }

  let matches = 0;
  let res = 0;
  if (arrayA.length > arrayB.length) {
    // Use Set for O(n) lookup instead of O(n²)
    const setB = new Set(arrayB);
    for (let i = 0; i < arrayA.length; i++) {
      if (setB.has(arrayA[i])) matches++;
    }
    res = (matches / arrayA.length) * 100;
  } else {
    // Use Set for O(n) lookup instead of O(n²)
    const setA = new Set(arrayA);
    for (let i = 0; i < arrayB.length; i++) {
      if (setA.has(arrayB[i])) matches++;
    }
    res = (matches / arrayB.length) * 100;
  }
  return res;
}

export interface SimilarityResult<T> {
  item: T[];
  similarities: number;
}

export function findSimilarities<T>(
  arrayA: T[],
  arrayB: T[],
): SimilarityResult<T>[] {
  // Validate inputs
  if (!arrayA || !arrayB) {
    throw new Error('Arrays cannot be null or undefined');
  }

  const result: SimilarityResult<T>[] = [];
  // Create copy and sort arrayA to ensure predictable combination order
  const sortedA = [...arrayA].sort();
  const cmb = combinations(sortedA);
  cmb.forEach((item) => {
    // No need to sort arrayB since we use Set for O(1) lookup
    const similarities = getPercentOfSimilarities(item, arrayB);
    result.push({
      item,
      similarities,
    });
  });
  return result;
}
