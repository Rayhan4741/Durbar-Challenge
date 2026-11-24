function removeDuplicateCharacters(str: string): string {
  const seen = new Set<string>();
  let result = '';

  for (const char of str) {
    if (!seen.has(char)) {
      seen.add(char);
      result += char;
    }
  }

  return result;
}
