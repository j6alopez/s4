import fetch, {Headers, Response} from 'node-fetch';
import {Joke} from '../jokes/joke';

class JokeService {
  private BASE_URL = 'https://icanhazdadjoke.com';

  async getJoke(): Promise<Joke> {
    const httpHeaders: Headers = new Headers();
    httpHeaders.append('Accept', 'application/json');

    try {
      const response: Response = await fetch(this.BASE_URL, {
        method: 'GET',
        headers: httpHeaders,
      });

      if (!response.ok) {
        throw new Error('Joke was not possible to retrieve!');
      }

      const data: Joke = await response.json();
      return data;
    } catch (error) {
      throw new Error('Somehting wrong happened!');
    }
  }
}
