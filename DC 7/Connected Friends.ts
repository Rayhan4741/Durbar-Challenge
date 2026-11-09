function countConnectedFriends(friendships: string[][], startPerson: string): number {
  const adj = new Map<string, string[]>();

  for (const [p1, p2] of friendships) {
    if (!adj.has(p1)) adj.set(p1, []);
    if (!adj.has(p2)) adj.set(p2, []);
    adj.get(p1)!.push(p2);
    adj.get(p2)!.push(p1);
  }

  const visited = new Set<string>();
  const queue: string[] = [startPerson];
  visited.add(startPerson);

  while (queue.length > 0) {
    const current = queue.shift()!;
    const neighbors = adj.get(current) ?? [];

    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }

  return visited.size;
}
