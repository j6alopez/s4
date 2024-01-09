import { Joke } from "../../entitites/Joke";
import { ScoreType } from "../../enums/ScoreType";
export declare class JokeScoreService {
    trackJoke(joke: Joke): void;
    scoreJoke(score: ScoreType): void;
}
