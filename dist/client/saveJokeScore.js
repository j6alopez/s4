import { JokeService } from '../domain/services/JokeService.js';
import { jokesWithScores } from '../index.js';
export function saveJokeScore(score) {
    const jokeService = new JokeService();
    jokeService.scoreJoke(score);
    console.log(jokesWithScores);
}
//# sourceMappingURL=saveJokeScore.js.map