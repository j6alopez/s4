export class UrlHelper {
    static addQueryParams(url, queryParams) {
        const resource = new URL(url);
        queryParams.forEach((value, key) => {
            resource.searchParams.append(key, value);
        });
        return resource;
    }
}
//# sourceMappingURL=UrlHelper.js.map