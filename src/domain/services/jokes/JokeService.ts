import { Joke } from "../../entitites/Joke.js";

export interface JokeService {
     getJoke(): Promise<Joke>;
}
