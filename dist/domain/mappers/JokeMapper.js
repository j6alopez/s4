import { Joke } from '../entitites/Joke.js';
import { JokeScore } from '../entitites/JokeScore.js';
import { ScoreType } from '../enums/ScoreType.js';
export class JokeMapper {
    static mapJokeToScore(joke, date) {
        return new JokeScore(joke.value, date, ScoreType.NOT_SCORED);
    }
    static fromDadJoke(jokeDTO) {
        const { joke } = jokeDTO;
        return new Joke(joke);
    }
    static fromChuckJoke(jokeDTO) {
        const { value: joke } = jokeDTO;
        return new Joke(joke);
    }
}
//# sourceMappingURL=JokeMapper.js.map