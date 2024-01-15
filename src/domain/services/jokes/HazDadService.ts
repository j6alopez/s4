import {HazDadDataSource} from '../../../infrastructure/datasources/HazDadDataSource.js';
import {HazDadJokeDTOResponse} from '../../../infrastructure/dtos/HazDadJokeDTOResponse.js';
import {Joke} from '../../entitites/Joke.js';
import {JokeMapper} from '../../mappers/JokeMapper.js';
import {JokeService} from './JokeService.js';

export class HazDadService implements JokeService {
  private readonly hazDadSource: HazDadDataSource;

  constructor() {
    this.hazDadSource = new HazDadDataSource();
  }

  async getJoke(): Promise<Joke> {
    const hazDadJokeDTO: HazDadJokeDTOResponse = await this.hazDadSource.getJoke();

    return JokeMapper.fromDadJoke(hazDadJokeDTO);
  }
}
