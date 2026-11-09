function isValidBdMobileNumber(phoneNumber: string): boolean {

  const bdMobileRegex = /^(?:|\+?88)?01[3-9]\d{8}$/;

  return bdMobileRegex.test(phoneNumber);
}
