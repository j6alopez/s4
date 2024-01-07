import { Joke } from '../entitites/Joke.js';
import { ScoreType } from '../enums/ScoreType.js';
export declare class JokeService {
    private readonly BASE_URL;
    getJoke(): Promise<Joke>;
    trackJoke(joke: Joke): void;
    scoreJoke(score: ScoreType): void;
}
