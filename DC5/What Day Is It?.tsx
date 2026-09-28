function getDayOfWeek(year: number, month: number, day: number): string {
  // TODO: return the name of the weekday
  const date = new Date(year, month - 1, day);

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return daysOfWeek[date.getDay()];
}
