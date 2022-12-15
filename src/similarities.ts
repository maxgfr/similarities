import { combinations } from './combinations';

export function getPercentOfSimilarities(arrayA: any[], arrayB: any[]): number {
  let matches = 0;
  let res = 0;
  if (arrayA.length > arrayB.length) {
    for (let i = 0; i < arrayA.length; i++) {
      if (arrayB.indexOf(arrayA[i]) != -1) matches++;
    }
    res = (matches / arrayA.length) * 100;
  } else {
    for (let i = 0; i < arrayB.length; i++) {
      if (arrayA.indexOf(arrayB[i]) != -1) matches++;
    }
    res = (matches / arrayB.length) * 100;
  }
  return res;
}

export function findSimilarities(arrayA: any[], arrayB: any[]) {
  const result: any[] = [];
  const cmb = combinations(arrayA.sort());
  cmb.forEach((item) => {
    const similarities = getPercentOfSimilarities(item, arrayB.sort());
    result.push({
      item,
      similarities,
    });
  });
  return result;
}
