import { Joke } from '../entitites/Joke.js';
import { JokeScore } from '../entitites/JokeScore.js';
export declare class JokeMapper {
    static mapJokeToScore(joke: Joke, date: string): JokeScore;
}
