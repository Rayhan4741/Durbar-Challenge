function minRemovalsToBalance(s: string): number {
  let openCount = 0;
  let unmatchedClose = 0;

  for (const char of s) {
    if (char === '(') {
      openCount++;
    } else if (char === ')') {
      if (openCount > 0) {
        openCount--;
      } else {
        unmatchedClose++;
      }
    }
  }

  return openCount + unmatchedClose;
}
