import { Joke } from "../../entitites/Joke";
export interface JokeService {
    getJoke(): Promise<Joke>;
}
