import { Joke } from '../../entitites/Joke.js';
import { JokeService } from './JokeService.js';
export declare class HazDadService implements JokeService {
    private readonly hazDadSource;
    constructor();
    getJoke(): Promise<Joke>;
}
