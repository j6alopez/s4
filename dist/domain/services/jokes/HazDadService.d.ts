import { Joke } from '../../entitites/Joke.js';
import { JokeService } from './JokeService.js';
export declare class HazDadService implements JokeService {
    private readonly BASE_URL;
    getJoke(): Promise<Joke>;
}
