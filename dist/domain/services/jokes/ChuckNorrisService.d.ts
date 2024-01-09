import { Joke } from '../../entitites/Joke.js';
import { JokeService } from './JokeService';
export declare class ChuckNorrisService implements JokeService {
    getJoke(): Promise<Joke>;
}
