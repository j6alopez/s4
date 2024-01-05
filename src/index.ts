import {updateJoke} from './client/updateJoke.js';

document.addEventListener('DOMContentLoaded', () => {
  updateJoke();
  const jokeButton = document.getElementById('next-joke');
  jokeButton?.addEventListener('click', () => updateJoke());
});
