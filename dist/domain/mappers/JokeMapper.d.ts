import { ChuckJokeDTO } from '../../dtos/ChuckJokeDTO.js';
import { DadJokeDTO } from '../../dtos/DadJokeDTO.js';
import { Joke } from '../entitites/Joke.js';
import { JokeScore } from '../entitites/JokeScore.js';
export declare class JokeMapper {
    static mapJokeToScore(joke: Joke, date: string): JokeScore;
    static fromDadJoke(jokeDTO: DadJokeDTO): Joke;
    static fromChuckJoke(jokeDTO: ChuckJokeDTO): Joke;
}
