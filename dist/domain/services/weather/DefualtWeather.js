var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { UserConfig } from '../../../config/UserConfig.js';
import { WeatherMapper } from '../../mappers/WeatherMapper.js';
import { WeatherDataSource } from '../../../infrastructure/datasources/WeatherDataSource.js';
export class DefualtWeather {
    getCurrentWeather() {
        return __awaiter(this, void 0, void 0, function* () {
            const weatherDataSource = new WeatherDataSource();
            const user = this.getUserConfig();
            const weatherDTO = yield weatherDataSource.getCurrentWeather(user);
            return WeatherMapper.fromWeather(weatherDTO);
        });
    }
    getUserConfig() {
        return new UserConfig();
    }
}
//# sourceMappingURL=DefualtWeather.js.map