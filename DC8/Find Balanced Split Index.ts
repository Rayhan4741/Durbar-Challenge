function findBalancedSplit(nums: number[]): number {
  if (nums.length < 2) return -1;

  const totalSum = nums.reduce((acc, num) => acc + num, 0);
  let leftSum = 0;

  // Stop at nums.length - 1 because the right half must have at least one element
  for (let i = 0; i < nums.length - 1; i++) {
    leftSum += nums[i];
    const rightSum = totalSum - leftSum;

    if (leftSum === rightSum) {
      return i;
    }
  }

  return -1;
}
