import { jokesWithScores } from '../../../index.js';
import { JokeMapper } from '../../mappers/JokeMapper.js';
export class DefaultJokeScore {
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
//# sourceMappingURL=DefaultJokeScore.js.map