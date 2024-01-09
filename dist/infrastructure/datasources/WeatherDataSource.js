var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { UrlHelper } from '../../utilites/UrlHelper.js';
export class WeatherDataSource {
    constructor() {
        this.BASE_URL = 'http://api.weatherapi.com/v1/current.json';
    }
    getCurrentWeather(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParams = new Map();
            queryParams.set('key', user.apiKey);
            queryParams.set('q', user.city);
            queryParams.set('aqi', 'no');
            const resource = UrlHelper.addQueryParams(this.BASE_URL, queryParams);
            const httpHeaders = new Headers();
            httpHeaders.append('Content-Type', 'application/json');
            try {
                const response = yield fetch(resource, {
                    method: 'GET',
                    headers: httpHeaders,
                });
                if (!response.ok) {
                    throw new Error('Current Weather was not possible to retrieve!');
                }
                return yield response.json();
            }
            catch (error) {
                throw new Error('Somethig wrong happened while parsing Weather!');
            }
        });
    }
}
//# sourceMappingURL=WeatherDataSource.js.map