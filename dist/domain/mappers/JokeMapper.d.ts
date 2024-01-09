import { ChuckJokeDTO } from '../../infrastructure/dtos/ChuckJokeDTO.js';
import { HazDadJokeDTO } from '../../infrastructure/dtos/HazDadJokeDTO.js';
import { Joke } from '../entitites/Joke.js';
import { JokeScore } from '../entitites/JokeScore.js';
export declare class JokeMapper {
    static mapJokeToScore(joke: Joke, date: string): JokeScore;
    static fromDadJoke(jokeDTO: HazDadJokeDTO): Joke;
    static fromChuckJoke(jokeDTO: ChuckJokeDTO): Joke;
}
