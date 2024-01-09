import { JokeScoreService } from '../domain/services/scores/JokeScoreService.js';
import { jokesWithScores } from '../index.js';
export function saveJokeScore(score) {
    const jokeScoreService = new JokeScoreService();
    jokeScoreService.scoreJoke(score);
    console.log(jokesWithScores);
}
//# sourceMappingURL=saveJokeScore.js.map