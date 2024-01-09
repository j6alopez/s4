export class UrlHelper {
  static addQueryParams(url: string, queryParams: Map<string, string>): URL {
    const resource: URL = new URL(url);
    queryParams.forEach((value, key) => {
      resource.searchParams.append(key, value);
    });
    return resource;
  }
}
