import { JokeScore } from '../entitites/JokeScore.js';
import { ScoreType } from '../enums/ScoreType.js';
export class JokeMapper {
    static mapJokeToScore(joke, date) {
        return new JokeScore(joke.joke, date, ScoreType.NOT_SCORED);
    }
}
//# sourceMappingURL=JokeMapper.js.map