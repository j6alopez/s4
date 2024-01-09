var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { UrlHelper } from '../../utilites/UrlHelper';
export class WeatherService {
    constructor() {
        this.BASE_URL = 'http://api.weatherapi.com/v1/current.json';
    }
    getCurrentWeather() {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.getUserConfig();
            const queryParams = new Map();
            queryParams.set('key', user.apiKey);
            queryParams.set('q', user.apiKey);
            queryParams.set('', 'no');
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
                const currentWeather = yield response.json();
                return currentWeather;
            }
            catch (error) {
                throw new Error('Somethig wrong happened while parsing Weather!');
            }
        });
    }
    getUserConfig() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userConfig = yield fetch('../../config/UserConfig.json').then(response => response.json());
                return userConfig;
            }
            catch (error) {
                throw new Error(`Error while parsing UserConfig.json: ${error}`);
            }
        });
    }
}
//# sourceMappingURL=WeatherService.js.map