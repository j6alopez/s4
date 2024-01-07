import {getNextJoke} from './client/getNextJoke';
import {saveJokeScore} from './client/saveJokeScore';
import {JokeScore} from './domain/entitites/JokeScore';
import {ScoreType} from './domain/enums/ScoreType';

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

export let jokesWithScores: JokeScore[];
