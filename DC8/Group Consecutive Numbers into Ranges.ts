function groupConsecutiveRanges(numbers: number[]): string[] {
  if (numbers.length === 0) return [];

  // Sort numerically in ascending order without mutating the input array
  const sorted = [...numbers].sort((a, b) => a - b);
  const result: string[] = [];

  let start = sorted[0];
  let prev = sorted[0];

  for (let i = 1; i < sorted.length; i++) {
    const curr = sorted[i];

    // Skip duplicate numbers if present
    if (curr === prev) continue;

    if (curr === prev + 1) {
      prev = curr;
    } else {
      result.push(start === prev ? `${start}` : `${start}-${prev}`);
      start = curr;
      prev = curr;
    }
  }

  // Push the final range
  result.push(start === prev ? `${start}` : `${start}-${prev}`);

  return result;
}
