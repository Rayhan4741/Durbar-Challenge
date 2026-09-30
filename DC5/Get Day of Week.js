function getDayOfWeek(year, month, day) {
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
