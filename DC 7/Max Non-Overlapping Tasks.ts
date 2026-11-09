function maxTasks(tasks: number[][]): number {
  if (tasks.length === 0) return 0;

  // Sort tasks by finish time in ascending order
  tasks.sort((a, b) => a[1] - b[1]);

  let count = 0;
  let lastFinishTime = -Infinity;

  for (const [start, finish] of tasks) {
    if (start >= lastFinishTime) {
      count++;
      lastFinishTime = finish;
    }
  }

  return count;
}
