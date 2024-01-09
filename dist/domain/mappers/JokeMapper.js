import { Joke } from '../entitites/Joke.js';
import { JokeScore } from '../entitites/JokeScore.js';
import { ScoreType } from '../enums/ScoreType.js';
export class JokeMapper {
    static mapJokeToScore(joke, date) {
        return new JokeScore(joke.value, date, ScoreType.NOT_SCORED);
    }
    static fromDadJoke(jokeDTO) {
        return new Joke(jokeDTO.joke);
    }
    static fromChuckJoke(jokeDTO) {
        return new Joke(jokeDTO.value);
    }
}
//# sourceMappingURL=JokeMapper.js.map