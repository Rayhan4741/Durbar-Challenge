interface Student {
  name: string;
  score: number;
}

interface RankedStudent extends Student {
  rank: number;
}

function rankStudents(students: Student[]): RankedStudent[] {
  if (students.length === 0) return [];

  // Stable sort descending by score
  const sorted = [...students].sort((a, b) => b.score - a.score);

  const result: RankedStudent[] = [];
  let currentRank = 1;

  for (let i = 0; i < sorted.length; i++) {
    if (i > 0 && sorted[i].score < sorted[i - 1].score) {
      currentRank = i + 1;
    }

    result.push({
      ...sorted[i],
      rank: currentRank,
    });
  }

  return result;
}
