import {ScoreType} from '../domain/enums/ScoreType.js';
import { JokeScoreService } from '../domain/services/scores/DefaultJokeScore.js';
import {jokesWithScores} from '../index.js';

export function saveJokeScore(score: ScoreType): void {
  const jokeScoreService: JokeScoreService = new JokeScoreService();
  jokeScoreService.scoreJoke(score);
  console.log(jokesWithScores);
}
