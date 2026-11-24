function nextGreaterElement(nums: number[]): number[] {
  const result = new Array<number>(nums.length).fill(-1);
  // Monotonic decreasing stack storing indices of elements waiting for a greater value
  const stack: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    while (stack.length > 0 && nums[i] > nums[stack[stack.length - 1]]) {
      const prevIndex = stack.pop()!;
      result[prevIndex] = nums[i];
    }
    stack.push(i);
  }

  return result;
}
