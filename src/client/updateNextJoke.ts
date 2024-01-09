import {Joke} from '../domain/entitites/Joke.js';
import {HazDadService} from '../domain/services/jokes/HazDadService.js';
import {JokeService} from '../domain/services/jokes/JokeService.js';
import {DefaultJokeScore} from '../domain/services/scores/DefaultJokeScore.js';
import {JokeScoreService} from '../domain/services/scores/JokeScoreService.js';
import {jokesWithScores} from '../index.js';

export async function updateJoke(): Promise<void> {
  const jokeService: JokeService = new HazDadService();
  const recievedJoke: Joke = await jokeService.getJoke();

  const jokeElement: HTMLElement | null = document.getElementById('joke');
  if (jokeElement !== null) {
    const jokeScoreService: JokeScoreService = new DefaultJokeScore();
    jokeElement.innerText = recievedJoke.value;
    jokeScoreService.trackJoke(recievedJoke);
    console.log(jokesWithScores);
  }
}
