export class UrlHelper {
    static addQueryParams(url, queryParams) {
        const resource = new URL(url);
        queryParams.forEach(element => {
            resource.searchParams.append(element[0], element[1]);
        });
        return resource;
    }
}
//# sourceMappingURL=UrlHelper.js.map