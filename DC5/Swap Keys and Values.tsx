function swapKeysAndValues(obj: Record<string, string | number>): Record<string, string> {
  // Your code here
  const result: Record<string, string> = {};

  for (const [key, value] of Object.entries(obj)) {
    result[String(value)] = key;
  }

  return result;
}
