import {updateJoke} from './client/updateNextJoke.js';
import {initializeContent} from './client/initializeContent.js';
import {saveJokeScore} from './client/saveJokeScore.js';
import {JokeScore} from './domain/entitites/JokeScore.js';
import {ScoreType} from './domain/enums/ScoreType.js';

document.addEventListener('DOMContentLoaded', () => {
  initializeContent();

  const jokeButton = document.getElementById('next-joke');
  jokeButton?.addEventListener('click', () => updateJoke());

  const badScoreButton = document.getElementById('bad-score');
  const normalScoreButton = document.getElementById('normal-score');
  const goodScoreButton = document.getElementById('good-score');

  badScoreButton?.addEventListener('click', () => {
    saveJokeScore(ScoreType.BAD);
    updateJoke();
  });

  normalScoreButton?.addEventListener('click', () => {
    saveJokeScore(ScoreType.NORMAL);
    updateJoke();
  });

  goodScoreButton?.addEventListener('click', () => {
    saveJokeScore(ScoreType.GOOD);
    updateJoke();
  });
});

export const jokesWithScores: JokeScore[] = [];
