var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { HazDadService } from '../domain/services/jokes/HazDadService.js';
import { DefaultJokeScore } from '../domain/services/scores/DefaultJokeScore.js';
import { jokesWithScores } from '../index.js';
export function updateJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        const jokeService = new HazDadService();
        const recievedJoke = yield jokeService.getJoke();
        const jokeElement = document.getElementById('joke');
        if (jokeElement !== null) {
            const jokeScoreService = new DefaultJokeScore();
            jokeElement.innerText = recievedJoke.value;
            jokeScoreService.trackJoke(recievedJoke);
            console.log(jokesWithScores);
        }
    });
}
//# sourceMappingURL=updateNextJoke.js.map