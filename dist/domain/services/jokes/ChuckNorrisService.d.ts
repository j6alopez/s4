import { Joke } from '../../entitites/Joke.js';
import { JokeService } from './JokeService';
export declare class ChuckNorrisService implements JokeService {
    private readonly BASE_ULR;
    getJoke(): Promise<Joke>;
}
