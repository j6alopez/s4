"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = require("node-fetch");
class JokeService {
    BASE_URL = 'https://icanhazdadjoke.com';
    async getJoke() {
        const httpHeaders = new node_fetch_1.Headers();
        httpHeaders.append('Accept', 'application/json');
        try {
            const response = await (0, node_fetch_1.default)(this.BASE_URL, {
                method: 'GET',
                headers: httpHeaders,
            });
            if (!response.ok) {
                throw new Error('Joke was not possible to retrieve!');
            }
            const data = await response.json();
            return data;
        }
        catch (error) {
            throw new Error('Somehting wrong happened!');
        }
    }
}
//# sourceMappingURL=JokeService.js.map