type QueryParams = Record<string, string | number>;

function toQueryString(params: QueryParams): string {
  return Object.entries(params)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`
    )
    .join("&");
}
