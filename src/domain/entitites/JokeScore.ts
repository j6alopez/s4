import {ScoreType} from '../enums/ScoreType.js';

export class JokeScore {
  value: string;
  date: string;
  score: ScoreType;

  constructor(value: string, date: string, score: ScoreType) {
    this.value = value;
    this.date = date;
    this.score = score;
  }
}
