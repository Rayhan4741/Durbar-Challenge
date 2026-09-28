function commonSkills(skills1: string[], skills2: string[]): string[] {
  // TODO: Return shared skills lowercased, deduplicated, and sorted

  const set2 = new Set(skills2.map((skill) => skill.toLowerCase()));

  const commonSet = new Set<string>();

  for (const skill of skills1) {
    const lowerSkill = skill.toLowerCase();
    if (set2.has(lowerSkill)) {
      commonSet.add(lowerSkill);
    }
  }


  return Array.from(commonSet).sort();
}
