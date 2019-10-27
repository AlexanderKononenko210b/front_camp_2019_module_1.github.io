export default async function load() {
    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=64dbacdde33446cc855b6a5d8d59b450';
    const req = new Request(url);
    const response = await fetch(req);
    const json = await response.json();
    return json;
}

