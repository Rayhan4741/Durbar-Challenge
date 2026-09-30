function swapKeysAndValues(obj) {
  const result = {};

  for (const [key, value] of Object.entries(obj)) {
    result[String(value)] = key;
  }

  return result;
}
