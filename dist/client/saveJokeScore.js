import { JokeService } from '../domain/services/JokeService.js';
export function saveJokeScore(score) {
    const jokeService = new JokeService();
    jokeService.scoreJoke(score);
}
//# sourceMappingURL=saveJokeScore.js.map