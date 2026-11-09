function longestIncreasingStreak(nums) {
  // TODO: return the length of the longest contiguous strictly increasing streak
  if(nums.length === 0){
    return 0;
  }
  let maxStreak = 1;
  let currentStreak = 1;

  for (let i= 1; i<nums.length; i++){
    if(nums[i] > nums[i - 1]){
      currentStreak++;
    }
    else{
      currentStreak = 1;
    }
    if(currentStreak > maxStreak){
      maxStreak = currentStreak;
    }
  }
  return maxStreak;
}
