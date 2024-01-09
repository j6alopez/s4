import { DadJokeDTO } from '../../../dtos/DadJokeDTO.js';
import { Joke } from '../../entitites/Joke.js';
import { JokeMapper } from '../../mappers/JokeMapper.js';
import { JokeService } from './JokeService.js';

export class HazDadService implements JokeService {
  private readonly BASE_URL = 'https://icanhazdadjoke.com';

  async getJoke(): Promise<Joke> {
    const httpHeaders: Headers = new Headers();
    httpHeaders.append('Accept', 'application/json');

    try {
      const response: Response = await fetch(this.BASE_URL, {
        method: 'GET',
        headers: httpHeaders,
      });

      if (!response.ok) {
        throw new Error('HazDad joke was not possible to retrieve');
      }

      const jokeDTO: DadJokeDTO = await response.json();
      return JokeMapper.fromDadJoke(jokeDTO);
    } catch (error) {
      throw new Error('joke error while parsing');
    }
  }
}
