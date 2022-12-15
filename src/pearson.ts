export function pearsonCorrelationNumber(
  data1: number[],
  data2: number[],
): number {
  // Check if the datasets have the same length
  if (data1.length !== data2.length) {
    throw new Error('The datasets must have the same length');
  }

  // Calculate the sum of the products of the corresponding elements in the datasets
  let sumProduct = 0;
  for (let i = 0; i < data1.length; i++) {
    sumProduct += data1[i] * data2[i];
  }

  // Calculate the sum of each dataset
  let sumData1 = 0;
  let sumData2 = 0;
  for (let i = 0; i < data1.length; i++) {
    sumData1 += data1[i];
    sumData2 += data2[i];
  }

  // Calculate the sum of the squares of each dataset
  let sumSquaresData1 = 0;
  let sumSquaresData2 = 0;
  for (let i = 0; i < data1.length; i++) {
    sumSquaresData1 += data1[i] * data1[i];
    sumSquaresData2 += data2[i] * data2[i];
  }

  // Calculate the Pearson correlation coefficient
  const numerator = data1.length * sumProduct - sumData1 * sumData2;
  const denominator = Math.sqrt(
    (data1.length * sumSquaresData1 - sumData1 * sumData1) *
      (data1.length * sumSquaresData2 - sumData2 * sumData2),
  );
  return numerator / denominator;
}

export function pearsonCorrelationString(
  arr1: string[],
  arr2: string[],
): number {
  // Check if the arrays have the same length
  if (arr1.length !== arr2.length) {
    throw new Error('The arrays must have the same length');
  }

  // Initialize the sum of the first array and the sum of the second array
  let sum1 = 0;
  let sum2 = 0;

  // Initialize the sum of squares of the first array and the sum of squares of the second array
  let sum1Sq = 0;
  let sum2Sq = 0;

  // Initialize the sum of products of the two arrays
  let pSum = 0;

  // Loop through the arrays
  for (let i = 0; i < arr1.length; i++) {
    // Convert the current elements to numbers
    const num1 = hashString(arr1[i]);
    const num2 = hashString(arr2[i]);

    // Update the sums and sum of squares
    sum1 += num1;
    sum2 += num2;
    sum1Sq += num1 ** 2;
    sum2Sq += num2 ** 2;
    pSum += num1 * num2;
  }

  // Calculate the numerator of the Pearson correlation
  const num = pSum - (sum1 * sum2) / arr1.length;

  // Calculate the denominator of the Pearson correlation
  const den = Math.sqrt(
    (sum1Sq - sum1 ** 2 / arr1.length) * (sum2Sq - sum2 ** 2 / arr1.length),
  );

  // Return the Pearson correlation
  return num / den;
}

// Helper function to hash a string to a number
function hashString(s: string): number {
  let hash = 0;
  for (let i = 0; i < s.length; i++) {
    hash = (hash << 5) - hash + s.charCodeAt(i);
    hash |= 0; // Convert to 32-bit integer
  }
  return hash;
}
