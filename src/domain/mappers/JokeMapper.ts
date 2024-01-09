import { ChuckJokeDTO } from '../../dtos/ChuckJokeDTO.js';
import { DadJokeDTO } from '../../dtos/DadJokeDTO.js';
import {Joke} from '../entitites/Joke.js';
import {JokeScore} from '../entitites/JokeScore.js';
import {ScoreType} from '../enums/ScoreType.js';

export class JokeMapper {
  static mapJokeToScore(joke: Joke, date: string): JokeScore {
    return new JokeScore(joke.value, date, ScoreType.NOT_SCORED);
  }
  static fromDadJoke(jokeDTO: DadJokeDTO): Joke {
    return new Joke(jokeDTO.joke);
  }

  static fromChuckJoke(jokeDTO: ChuckJokeDTO): Joke {
    return new Joke(jokeDTO.value);
  }
}
