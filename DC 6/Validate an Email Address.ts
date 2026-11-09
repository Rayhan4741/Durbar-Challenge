function isValidEmail(email: string): boolean {
  const atParts = email.split('@');
  if (atParts.length !== 2) return false;

  const [local, domainAndTld] = atParts;
  if (!local) return false;

  const isLocalValid = /^[a-zA-Z0-9._-]+$/.test(local);
  if (!isLocalValid) return false;

  const lastDotIndex = domainAndTld.lastIndexOf('.');
  if (lastDotIndex <= 0) return false;

  const domain = domainAndTld.slice(0, lastDotIndex);
  const tld = domainAndTld.slice(lastDotIndex + 1);

  const isDomainValid = /^[a-zA-Z0-9-]+$/.test(domain);

  const isTldValid = /^[a-zA-Z]{2,}$/.test(tld);

  return isDomainValid && isTldValid;
}
