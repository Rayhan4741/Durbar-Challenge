function findMajorityElement(nums: number[]): number | null {
  if (nums.length === 0) return null;

  // Phase 1: Boyer-Moore Voting Algorithm to find a candidate
  let candidate: number | null = null;
  let count = 0;

  for (const num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += num === candidate ? 1 : -1;
  }

  // Phase 2: Verify the candidate actually appears > n / 2 times
  let occurrences = 0;
  for (const num of nums) {
    if (num === candidate) {
      occurrences++;
    }
  }

  return occurrences > nums.length / 2 ? candidate : null;
}
