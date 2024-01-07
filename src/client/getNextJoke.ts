import {Joke} from '../domain/entitites/Joke.js';
import {JokeService} from '../domain/services/JokeService.js';

export async function getNextJoke(): Promise<void> {
  const jokeService: JokeService = new JokeService();
  const recievedJoke: Joke = await jokeService.getJoke();

  const jokeElement: HTMLElement | null = document.getElementById('joke');
  if (jokeElement !== null) {
    jokeElement.innerText = recievedJoke.joke;
    jokeService.trackJoke(recievedJoke);
  }
}
