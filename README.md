# similarities

This package contains functions to find similarities between arrays. Three functions are available: `findSimilarities` and `pearsonCorrelationNumber`/`pearsonCorrelationString`.

**✨ Key Features:**
- 🔒 **Type-safe**: Full TypeScript support with generics
- 🚀 **Performant**: O(n) lookups using Set instead of indexOf
- 🛡️ **Robust**: Input validation and edge case handling
- 💎 **Immutable**: No mutations of input arrays

## Installation

```bash
yarn add similarities
```

## Find similarities in arrays

The `findSimilarities` function takes in two arrays, arrayA and arrayB, and returns an array of objects containing all possible combinations of elements from arrayA and the percentage of similarities between each combination and arrayB.

> **Note:** This function uses default sorting (lexicographic). For arrays with numeric values, results are sorted as strings (e.g., `[1, 10, 2]`). This is typically used with string arrays.

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

## Error Handling

All functions include robust input validation:

```typescript
// Throws: "Arrays cannot be null or undefined"
findSimilarities(null, ['a', 'b']);

// Throws: "Datasets cannot be empty"
pearsonCorrelationNumber([], []);

// Throws: "The arrays must have the same length"
pearsonCorrelationString(['a', 'b'], ['a', 'b', 'c']);

// Returns: 0 (handles division by zero gracefully)
pearsonCorrelationNumber([5, 5, 5], [10, 10, 10]);
```

## TypeScript Support

Full generic type support for type safety:

```typescript
import { findSimilarities, SimilarityResult } from 'similarities';

// Strongly typed with generics
const result: SimilarityResult<string>[] = findSimilarities(
  ['a', 'b', 'c'],
  ['b', 'c', 'd']
);
```
