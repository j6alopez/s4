var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { HazDadDataSource } from '../../../infrastructure/datasources/HazDadDataSource.js';
import { JokeMapper } from '../../mappers/JokeMapper.js';
export class HazDadService {
    constructor() {
        this.hazDadSource = new HazDadDataSource();
    }
    getJoke() {
        return __awaiter(this, void 0, void 0, function* () {
            const hazDadJokeDTO = yield this.hazDadSource.getJoke();
            return JokeMapper.fromDadJoke(hazDadJokeDTO);
        });
    }
}
//# sourceMappingURL=HazDadService.js.map