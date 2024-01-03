"use strict";
async function updateJoke() {
    const httpHeaders = new Headers();
    httpHeaders.append('Accept', 'application/json');
    const BASE_URL = 'https://icanhazdadjoke.com';
    try {
        const response = await fetch(BASE_URL, {
            method: 'GET',
            headers: httpHeaders,
        });
        if (!response.ok) {
            throw new Error('Joke was not possible to retrieve!');
        }
        const data = await response.json();
        const jokeElement = document.getElementById('joke');
        if (jokeElement !== null) {
            jokeElement.innerText = data.joke;
        }
    }
    catch (error) {
        throw new Error('Somehting wrong happened!');
    }
}
//# sourceMappingURL=update.js.map