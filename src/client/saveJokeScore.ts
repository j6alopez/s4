import {ScoreType} from '../domain/enums/ScoreType.js';
import {JokeService} from '../domain/services/JokeService.js';
import {jokesWithScores} from '../index.js';

export function saveJokeScore(score: ScoreType): void {
  const jokeService: JokeService = new JokeService();
  jokeService.scoreJoke(score);
  console.log(jokesWithScores);
}
