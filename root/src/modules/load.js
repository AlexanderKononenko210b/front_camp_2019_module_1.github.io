export default async function load(url) {
    const req = new Request(url);
    const response = await fetch(req);
    const json = await response.json();
    return json;
}

