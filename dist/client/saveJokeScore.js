import { DefaultJokeScore } from '../domain/services/scores/DefaultJokeScore.js';
import { jokesWithScores } from '../index.js';
export function saveJokeScore(score) {
    const jokeScoreService = new DefaultJokeScore();
    jokeScoreService.scoreJoke(score);
    console.log(jokesWithScores);
}
//# sourceMappingURL=saveJokeScore.js.map