import { ChuckJokeDTOResponse } from '../../infrastructure/dtos/ChuckJokeDTOResponse.js';
import { HazDadJokeDTOResponse } from '../../infrastructure/dtos/HazDadJokeDTOResponse.js';
import { Joke } from '../entitites/Joke.js';
import { JokeScore } from '../entitites/JokeScore.js';
export declare class JokeMapper {
    static mapJokeToScore(joke: Joke, date: string): JokeScore;
    static fromDadJoke(jokeDTO: HazDadJokeDTOResponse): Joke;
    static fromChuckJoke(jokeDTO: ChuckJokeDTOResponse): Joke;
}
