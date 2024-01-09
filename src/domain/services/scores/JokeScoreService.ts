import {Joke} from '../../entitites/Joke.js';
import {ScoreType} from '../../enums/ScoreType.js';

export interface JokeScoreService {
  trackJoke(joke: Joke): void;
  scoreJoke(score: ScoreType): void;
}
