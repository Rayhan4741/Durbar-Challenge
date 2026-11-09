function daysBetweenDates(date1: string, date2: string): number {
  // TODO: Return absolute number of days between date1 and date2
  const MS_PER_DAY = 1000 * 60 * 60 * 24;

  const [y1, m1, d1] = date1.split("-").map(Number);
  const [y2, m2, d2] = date2.split("-").map(Number);

  const utc1 = Date.UTC(y1, m1 - 1, d1);
  const utc2 = Date.UTC(y2, m2 - 1, d2);

  return Math.abs(Math.round((utc2 - utc1) / MS_PER_DAY));
}
