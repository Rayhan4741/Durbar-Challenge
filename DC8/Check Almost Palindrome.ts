function isAlmostPalindrome(s: string): boolean {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      // Try skipping either the left character or the right character
      return isPalindromeRange(s, left + 1, right) || isPalindromeRange(s, left, right - 1);
    }
    left++;
    right--;
  }

  return true;
}

function isPalindromeRange(s: string, left: number, right: number): boolean {
  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
}
