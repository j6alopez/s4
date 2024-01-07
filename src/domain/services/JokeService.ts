import {jokesWithScores} from '../../index.js';
import {Joke} from '../entitites/Joke.js';
import {JokeScore} from '../entitites/JokeScore.js';
import {ScoreType} from '../enums/ScoreType.js';
import {JokeMapper} from '../mappers/JokeMapper.js';

export class JokeService {
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
        throw new Error('Joke was not possible to retrieve!');
      }

      const joke: Joke = await response.json();
      return joke;
    } catch (error) {
      throw new Error('Somehting wrong happened!');
    }
  }

  trackJoke(joke: Joke): void {
    const timeStamp = new Date().toISOString();
    jokesWithScores.push(JokeMapper.mapJokeToScore(joke, timeStamp));
  }

  scoreJoke(score: ScoreType): void {
    const lastElement = jokesWithScores.length - 1;
    const jokeScore: JokeScore = jokesWithScores[lastElement];
    jokeScore.score = score;
    console.log(jokesWithScores);
  }
}
