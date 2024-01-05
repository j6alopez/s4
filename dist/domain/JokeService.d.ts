import { Joke } from './Joke.js';
export declare class JokeService {
    private BASE_URL;
    getJoke(): Promise<Joke>;
}
