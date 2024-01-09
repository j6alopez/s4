import {ScoreType} from '../domain/enums/ScoreType.js';
import {DefaultJokeScore} from '../domain/services/scores/DefaultJokeScore.js';
import {JokeScoreService} from '../domain/services/scores/JokeScoreService.js';
import {jokesWithScores} from '../index.js';

export function saveJokeScore(score: ScoreType): void {
  const jokeScoreService: JokeScoreService = new DefaultJokeScore();
  jokeScoreService.scoreJoke(score);
  console.log(jokesWithScores);
}
