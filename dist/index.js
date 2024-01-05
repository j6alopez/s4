import { updateJoke } from './client/updateJoke.js';
document.addEventListener('DOMContentLoaded', () => {
    updateJoke();
    const jokeButton = document.getElementById('next-joke');
    jokeButton === null || jokeButton === void 0 ? void 0 : jokeButton.addEventListener('click', () => updateJoke());
});
//# sourceMappingURL=index.js.map