interface Student {
  name: string;
  present: number;
  total: number;
}

function formatAttendanceReport(students: Student[]): string[] {
  // TODO: return an array of formatted attendance reports
  return students.map(({ name, present, total }) => {
    const percentage = Math.round((present / total) * 100);

    let status = "At Risk";
    if (percentage >= 90) status = "Excellent";
    else if (percentage >= 75) status = "Good";

    return `${name}: ${present}/${total} (${percentage}%) - ${status}`;
  });
}
