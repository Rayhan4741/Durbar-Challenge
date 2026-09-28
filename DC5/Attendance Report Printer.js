function formatAttendanceReport(students) {
  return students.map(({ name, present, total }) => {
    const percentage = Math.round((present / total) * 100);

    let status = "At Risk";
    if (percentage >= 90) status = "Excellent";
    else if (percentage >= 75) status = "Good";

    return `${name}: ${present}/${total} (${percentage}%) - ${status}`;
  });
}
