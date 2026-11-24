function moveZeros(nums: number[]): number[] {
  const result = new Array<number>(nums.length).fill(0);
  let insertPos = 0;

  for (const num of nums) {
    if (num !== 0) {
      result[insertPos++] = num;
    }
  }

  return result;
}
