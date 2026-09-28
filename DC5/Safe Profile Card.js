function generateProfileCard(user) {
  const name = user.name ?? "Anonymous";
  const city = user.address?.city ?? "Unknown";
  const followers = user.social?.followers ?? 0;

  return `${name} | ${city} | followers: ${followers}`;
}
