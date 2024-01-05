"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function updateJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        const httpHeaders = new Headers();
        httpHeaders.append('Accept', 'application/json');
        const BASE_URL = 'https://icanhazdadjoke.com';
        try {
            const response = yield fetch(BASE_URL, {
                method: 'GET',
                headers: httpHeaders,
            });
            if (!response.ok) {
                throw new Error('Joke was not possible to retrieve!');
            }
            const data = yield response.json();
            const jokeElement = document.getElementById('joke');
            if (jokeElement !== null) {
                jokeElement.innerText = data.joke;
            }
        }
        catch (error) {
            throw new Error('Somehting wrong happened!');
        }
    });
}
//# sourceMappingURL=update.js.map