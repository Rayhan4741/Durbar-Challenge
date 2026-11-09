function chunkArray<T>(arr: T[], size: number): T[][] {
  // TODO: Return an array of chunks of length `size`
  const result: T[][] = [];

  for(let i = 0; i<arr.length; i+= size){
    result.push(arr.slice(i, i+size));
  }
  return result;
}
