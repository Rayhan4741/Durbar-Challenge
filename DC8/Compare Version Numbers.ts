function compareVersions(version1: string, version2: string): number {
  const v1 = version1.split('.');
  const v2 = version2.split('.');
  const maxLength = Math.max(v1.length, v2.length);

  for (let i = 0; i < maxLength; i++) {
    const rev1 = i < v1.length ? Number(v1[i]) : 0;
    const rev2 = i < v2.length ? Number(v2[i]) : 0;

    if (rev1 > rev2) return 1;
    if (rev1 < rev2) return -1;
  }

  return 0;
}
