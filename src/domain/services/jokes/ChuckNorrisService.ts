import {ChuckNorrisDataSource} from '../../../infrastructure/datasources/ChuckNorrisDataSource.js';
import {ChuckJokeDTOResponse} from '../../../infrastructure/dtos/ChuckJokeDTOResponse.js';
import {Joke} from '../../entitites/Joke.js';
import {JokeMapper} from '../../mappers/JokeMapper.js';
import {JokeService} from './JokeService';

export class ChuckNorrisService implements JokeService {
  private readonly chuckDataSource: ChuckNorrisDataSource;

  constructor() {
    this.chuckDataSource = new ChuckNorrisDataSource();
  }

  async getJoke(): Promise<Joke> {
    const chuckJokeDTO: ChuckJokeDTOResponse = await this.chuckDataSource.getJoke();
    return JokeMapper.fromChuckJoke(chuckJokeDTO);
  }
}
