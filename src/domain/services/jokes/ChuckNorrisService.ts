import { ChuckJokeDTO } from '../../../dtos/ChuckJokeDTO.js';
import { Joke } from "../../entitites/Joke.js";
import { JokeMapper } from '../../mappers/JokeMapper.js';
import { JokeService } from "./JokeService";

export class ChuckNorrisService implements JokeService {
    private readonly BASE_ULR = "https://api.chucknorris.io/jokes/random";

    async getJoke(): Promise<Joke> {
        const httpHeaders: Headers = new Headers();
        httpHeaders.append('Accept', 'application/json');
        try {
            const response: Response = await fetch(this.BASE_ULR, {
                method: 'GET',
                headers: httpHeaders
            });

            if (!response.ok) {
                throw new Error('ChuckNorris joke was not possible to retrieve');
              }
            
              const jokeDTO: ChuckJokeDTO = await response.json();
              return JokeMapper.fromChuckJoke(jokeDTO);
        
        } catch (error) {
            throw new Error('ChuckNorris joke error while parsing');
        }
    }
}
