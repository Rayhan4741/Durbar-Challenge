function simplifyPath(path: string): string {
  const stack: string[] = [];
  const segments = path.split('/');

  for (const segment of segments) {
    if (segment === '' || segment === '.') {
      continue;
    } else if (segment === '..') {
      if (stack.length > 0) {
        stack.pop();
      }
    } else {
      stack.push(segment);
    }
  }

  return '/' + stack.join('/');
}
