var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { JokeMapper } from '../../mappers/JokeMapper.js';
export class HazDadService {
    constructor() {
        this.BASE_URL = 'https://icanhazdadjoke.com';
    }
    getJoke() {
        return __awaiter(this, void 0, void 0, function* () {
            const httpHeaders = new Headers();
            httpHeaders.append('Accept', 'application/json');
            try {
                const response = yield fetch(this.BASE_URL, {
                    method: 'GET',
                    headers: httpHeaders,
                });
                if (!response.ok) {
                    throw new Error('HazDad joke was not possible to retrieve');
                }
                const jokeDTO = yield response.json();
                return JokeMapper.fromDadJoke(jokeDTO);
            }
            catch (error) {
                throw new Error('joke error while parsing');
            }
        });
    }
}
//# sourceMappingURL=HazDadService.js.map