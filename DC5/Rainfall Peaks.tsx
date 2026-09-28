function findRainfallPeaks(rainfall: number[]): number[] {
  const peaks: number[] = [];

  for (let i = 1; i < rainfall.length - 1; i++) {
    if (rainfall[i] > rainfall[i - 1] && rainfall[i] > rainfall[i + 1]) {
      peaks.push(i + 1);
    }
  }

  return peaks;
}
