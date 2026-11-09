function findFreeTime(bookedIntervals: number[][], workingHours: [number, number]): number[][] {
  const [workStart, workEnd] = workingHours;

  // 1. Clip booked intervals to the working hours window
  const clipped: [number, number][] = [];
  for (const [start, end] of bookedIntervals) {
    const s = Math.max(start, workStart);
    const e = Math.min(end, workEnd);
    if (s < e) {
      clipped.push([s, e]);
    }
  }

  // 2. Sort clipped intervals by start time
  clipped.sort((a, b) => a[0] - b[0]);

  // 3. Merge overlapping booked intervals
  const merged: [number, number][] = [];
  for (const interval of clipped) {
    if (merged.length === 0 || merged[merged.length - 1][1] < interval[0]) {
      merged.push(interval);
    } else {
      merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], interval[1]);
    }
  }

  // 4. Identify free intervals in the gaps
  const freeTime: number[][] = [];
  let currentStart = workStart;

  for (const [bStart, bEnd] of merged) {
    if (currentStart < bStart) {
      freeTime.push([currentStart, bStart]);
    }
    currentStart = Math.max(currentStart, bEnd);
  }

  if (currentStart < workEnd) {
    freeTime.push([currentStart, workEnd]);
  }

  return freeTime;
}
