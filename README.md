# similarities

This package contains functions to find similarities between arrays. Three functions are available: `findSimilarities` and `pearsonCorrelationNumber`/`pearsonCorrelationString`.

## Installation

```bash
yarn add similarities
```

## Find similarities in arrays

The findSimilarities function takes in two arrays, arrayA and arrayB, and returns an array of objects containing all possible combinations of elements from arrayA and the percentage of similarities between each combination and arrayB.

```typescript
import { findSimilarities } from 'similarities';

const arrayA = ['dog', 'cat', 'bird'];
const arrayB = ['bird', 'horse', 'tiger'];
const result = findSimilarities(arrayA, arrayB);
console.log(result);
// Output:
// [
//   { item: ['bird'], similarities: 33.33333333333333 },
//   { item: ['bird', 'cat'], similarities: 33.33333333333333 },
//   { item: ['cat'], similarities: 0 },
//   { item: ['bird', 'dog'], similarities: 33.33333333333333 },
//   { item: ['bird', 'cat', 'dog'], similarities: 33.33333333333333 },
//   { item: ['cat', 'dog'], similarities: 0 },
//   { item: ['dog'], similarities: 0 },
// ]
```

## Pearson correlation coefficient

The `pearsonCorrelationNumber` and `pearsonCorrelationString` functions take in two arrays, arrayA and arrayB, and returns the Pearson correlation coefficient between the two arrays.

```typescript
import { pearsonCorrelationNumber } from 'similarities';

const arrayA = [1, 2, 3, 4, 5];
const arrayB = [1, 2, 3, 4, 5];
const result1 = pearsonCorrelationNumber(arrayA, arrayB);
console.log(result1);
// Output: 1

const arrayC = [1, 2, 3, 4, 5];
const arrayD = [5, 4, 3, 2, 1];
const result2 = pearsonCorrelationNumber(arrayC, arrayD);
console.log(result2);
// Output: -1

const arrayE = [1, 2, 3, 4, 5];
const arrayF = [1, 2, 3, 4, 6];
const result3 = pearsonCorrelationNumber(arrayE, arrayF);
console.log(result3);
// Output: 0.99498743710662
```

It also works with strings.

```typescript
import { pearsonCorrelationString } from 'similarities';

const arrayA = ['a', 'b', 'c'];
const arrayB = ['c', 'b', 'a'];
const result = pearsonCorrelationString(arrayA, arrayB);
console.log(result);
// Output: -1
```
