import {Joke} from '../entitites/Joke.js';
import {JokeScore} from '../entitites/JokeScore.js';
import {ScoreType} from '../enums/ScoreType.js';

export class JokeMapper {
  static mapJokeToScore(joke: Joke, date: string): JokeScore {
    return new JokeScore(joke.joke, date, ScoreType.NOT_SCORED);
  }
}
