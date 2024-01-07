import {ScoreType} from '../enums/ScoreType';

export class JokeScore {
  joke: string;
  date: string;
  score: ScoreType;

  constructor(joke: string, date: string, score: ScoreType) {
    this.joke = joke;
    this.date = date;
    this.score = score;
  }
}
