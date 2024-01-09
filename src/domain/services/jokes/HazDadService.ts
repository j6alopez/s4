import {HazDadDataSource} from '../../../infrastructure/datasources/HazDadDataSource.js';
import {HazDadJokeDTO} from '../../../infrastructure/dtos/HazDadJokeDTO.js';
import {Joke} from '../../entitites/Joke.js';
import {JokeMapper} from '../../mappers/JokeMapper.js';
import {JokeService} from './JokeService.js';

export class HazDadService implements JokeService {
  private readonly BASE_URL = 'https://icanhazdadjoke.com';

  async getJoke(): Promise<Joke> {
    const hazDadSource: HazDadDataSource = new HazDadDataSource();
    const hazDadJokeDTO: HazDadJokeDTO = await hazDadSource.getJoke();

    return JokeMapper.fromDadJoke(hazDadJokeDTO);
  }
}
