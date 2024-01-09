import { jokesWithScores } from "../../../index";
import { JokeMapper } from "../../mappers/JokeMapper";
export class JokeScoreService {
    trackJoke(joke) {
        const timeStamp = new Date().toISOString();
        const jokeScore = JokeMapper.mapJokeToScore(joke, timeStamp);
        jokesWithScores.push(jokeScore);
    }
    scoreJoke(score) {
        const lastElement = jokesWithScores.length - 1;
        const jokeScore = jokesWithScores[lastElement];
        jokeScore.score = score;
    }
}
//# sourceMappingURL=JokeScoreService.js.map