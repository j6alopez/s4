async function updateJoke(): Promise<void> {
  interface Joke {
    id: string;
    joke: string;
    status: number;
  }

  const httpHeaders: Headers = new Headers();
  httpHeaders.append('Accept', 'application/json');
  const BASE_URL = 'https://icanhazdadjoke.com';
  try {
    const response: Response = await fetch(BASE_URL, {
      method: 'GET',
      headers: httpHeaders,
    });

    if (!response.ok) {
      throw new Error('Joke was not possible to retrieve!');
    }

    const data: Joke = await response.json();
    const jokeElement: HTMLElement | null = document.getElementById('joke');
    if (jokeElement !== null) {
      jokeElement.innerText = data.joke;
    }
  } catch (error) {
    throw new Error('Somehting wrong happened!');
  }
}
