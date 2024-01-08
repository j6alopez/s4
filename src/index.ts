import {getNextJoke} from './client/getNextJoke.js';
import {saveJokeScore} from './client/saveJokeScore.js';
import {JokeScore} from './domain/entitites/JokeScore.js';
import {ScoreType} from './domain/enums/ScoreType.js';

document.addEventListener('DOMContentLoaded', () => {
  getNextJoke();
  const jokeButton = document.getElementById('next-joke');
  jokeButton?.addEventListener('click', () => getNextJoke());

  const badScoreButton = document.getElementById('bad-score');
  const normalScoreButton = document.getElementById('normal-score');
  const goodScoreButton = document.getElementById('good-score');

  badScoreButton?.addEventListener('click', () => saveJokeScore(ScoreType.BAD));

  normalScoreButton?.addEventListener('click', () =>
    saveJokeScore(ScoreType.NORMAL)
  );

  goodScoreButton?.addEventListener('click', () =>
    saveJokeScore(ScoreType.GOOD)
  );
});

export let jokesWithScores: JokeScore[] = [];