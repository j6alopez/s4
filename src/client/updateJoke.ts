import {Joke} from '../domain/Joke.js';
import {JokeService} from '../domain/JokeService.js';

export async function updateJoke(): Promise<void> {
  const jokeService: JokeService = new JokeService();
  const data: Joke = await jokeService.getJoke();
  const jokeElement: HTMLElement | null = document.getElementById('joke');
  if (jokeElement !== null) {
    jokeElement.innerText = data.joke;
  }
}
