export function combinations(arr: any[]): any[][] {
  // Initialize the result array
  const result: any[][] = [];

  // Loop through the input array
  for (let i = 0; i < arr.length; i++) {
    // Loop through the result array
    for (let j = 0, len = result.length; j < len; j++) {
      // Add the current element to each existing combination
      result.push(result[j].concat(arr[i]));
    }

    // Add the current element as a single-element combination
    result.push([arr[i]]);
  }

  // Return the result array
  return result;
}
