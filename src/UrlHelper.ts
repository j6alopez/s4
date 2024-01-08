export class UrlHelper {
  static addQueryParams(url: string, queryParams: Map<string, string>): URL {
    const resource: URL = new URL(url);
    queryParams.forEach(element => {
      resource.searchParams.append(element[0], element[1]);
    });
    return resource;
  }
}
