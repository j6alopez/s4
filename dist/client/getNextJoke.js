var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { JokeService } from '../domain/services/JokeService.js';
export function getNextJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        const jokeService = new JokeService();
        const recievedJoke = yield jokeService.getJoke();
        const jokeElement = document.getElementById('joke');
        if (jokeElement !== null) {
            jokeElement.innerText = recievedJoke.joke;
            jokeService.trackJoke(recievedJoke);
        }
    });
}
//# sourceMappingURL=getNextJoke.js.map