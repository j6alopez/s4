import { Joke } from '../jokes/Joke';
export declare class JokeService {
    private BASE_URL;
    getJoke(): Promise<Joke>;
}
