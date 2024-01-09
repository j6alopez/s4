import { Joke } from '../../entitites/Joke.js';
import { ScoreType } from '../../enums/ScoreType.js';
import { JokeScoreService } from './JokeScoreService.js';
export declare class DefaultJokeScore implements JokeScoreService {
    trackJoke(joke: Joke): void;
    scoreJoke(score: ScoreType): void;
}
