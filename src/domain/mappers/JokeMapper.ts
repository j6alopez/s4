import {ChuckJokeDTOResponse} from '../../infrastructure/dtos/ChuckJokeDTOResponse.js';
import {HazDadJokeDTOResponse} from '../../infrastructure/dtos/HazDadJokeDTOResponse.js';
import {Joke} from '../entitites/Joke.js';
import {JokeScore} from '../entitites/JokeScore.js';
import {ScoreType} from '../enums/ScoreType.js';

export class JokeMapper {
  static mapJokeToScore(joke: Joke, date: string): JokeScore {
    return new JokeScore(joke.value, date, ScoreType.NOT_SCORED);
  }
  static fromDadJoke(jokeDTO: HazDadJokeDTOResponse): Joke {
    return new Joke(jokeDTO.joke);
  }

  static fromChuckJoke(jokeDTO: ChuckJokeDTOResponse): Joke {
    return new Joke(jokeDTO.value);
  }
}
