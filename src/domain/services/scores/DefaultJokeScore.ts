import {jokesWithScores} from '../../../index.js';
import {Joke} from '../../entitites/Joke.js';
import {JokeScore} from '../../entitites/JokeScore.js';
import {ScoreType} from '../../enums/ScoreType.js';
import {JokeMapper} from '../../mappers/JokeMapper.js';
import {JokeScoreService} from './JokeScoreService.js';

export class DefaultJokeScore implements JokeScoreService {
  trackJoke(joke: Joke): void {
    const timeStamp = new Date().toISOString();
    const jokeScore: JokeScore = JokeMapper.mapJokeToScore(joke, timeStamp);
    jokesWithScores.push(jokeScore);
  }
  scoreJoke(score: ScoreType): void {
    const lastElement = jokesWithScores.length - 1;
    const jokeScore: JokeScore = jokesWithScores[lastElement];
    jokeScore.score = score;
  }
}
