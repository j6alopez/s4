import { Joke } from '../../entitites/Joke.js';
import { JokeService } from './JokeService';
export declare class ChuckNorrisService implements JokeService {
    private readonly chuckDataSource;
    constructor();
    getJoke(): Promise<Joke>;
}
