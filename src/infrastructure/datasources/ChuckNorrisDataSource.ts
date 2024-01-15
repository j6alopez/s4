import {ChuckJokeDTOResponse} from '../dtos/ChuckJokeDTOResponse';

export class ChuckNorrisDataSource {
  private readonly BASE_ULR = 'https://api.chucknorris.io/jokes/random';

  async getJoke(): Promise<ChuckJokeDTOResponse> {
    const httpHeaders: Headers = new Headers();
    httpHeaders.append('Accept', 'application/json');
    try {
      const response: Response = await fetch(this.BASE_ULR, {
        method: 'GET',
        headers: httpHeaders,
      });

      if (!response.ok) {
        throw new Error('ChuckNorris joke was not possible to retrieve');
      }

      return <ChuckJokeDTOResponse>await response.json();
    } catch (error) {
      throw new Error('ChuckNorris joke error while parsing');
    }
  }
}
