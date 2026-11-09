function gcd(a: number, b: number): number {
  // TODO: Return the greatest common divisor of a and 
  return b===0 ? a:gcd(b, a %b);
}
