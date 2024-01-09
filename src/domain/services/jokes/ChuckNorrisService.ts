import {ChuckNorrisDataSource} from '../../../infrastructure/datasources/ChuckNorrisDataSource.js';
import {ChuckJokeDTO} from '../../../infrastructure/dtos/ChuckJokeDTO.js';
import {Joke} from '../../entitites/Joke.js';
import {JokeMapper} from '../../mappers/JokeMapper.js';
import {JokeService} from './JokeService';

export class ChuckNorrisService implements JokeService {
  async getJoke(): Promise<Joke> {
    const chuckDataSource: ChuckNorrisDataSource = new ChuckNorrisDataSource();
    const chuckJokeDTO: ChuckJokeDTO = await chuckDataSource.getJoke();

    return JokeMapper.fromChuckJoke(chuckJokeDTO);
  }
}
