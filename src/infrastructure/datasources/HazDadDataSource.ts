import {HazDadJokeDTOResponse} from '../dtos/HazDadJokeDTOResponse';

export class HazDadDataSource {
  private readonly BASE_URL = 'https://icanhazdadjoke.com';
  async getJoke(): Promise<HazDadJokeDTOResponse> {
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

      return <HazDadJokeDTOResponse>await response.json();
    } catch (error) {
      throw new Error('HazDad error while parsing');
    }
  }
}
