import { getNextJoke } from './client/getNextJoke';
import { saveJokeScore } from './client/saveJokeScore';
import { ScoreType } from './domain/enums/ScoreType';
document.addEventListener('DOMContentLoaded', () => {
    getNextJoke();
    const jokeButton = document.getElementById('next-joke');
    jokeButton === null || jokeButton === void 0 ? void 0 : jokeButton.addEventListener('click', () => getNextJoke());
    const badScoreButton = document.getElementById('bad-score');
    const normalScoreButton = document.getElementById('normal-score');
    const goodScoreButton = document.getElementById('good-score');
    badScoreButton === null || badScoreButton === void 0 ? void 0 : badScoreButton.addEventListener('click', () => saveJokeScore(ScoreType.BAD));
    normalScoreButton === null || normalScoreButton === void 0 ? void 0 : normalScoreButton.addEventListener('click', () => saveJokeScore(ScoreType.NORMAL));
    goodScoreButton === null || goodScoreButton === void 0 ? void 0 : goodScoreButton.addEventListener('click', () => saveJokeScore(ScoreType.GOOD));
});
export let jokesWithScores;
//# sourceMappingURL=index.js.map