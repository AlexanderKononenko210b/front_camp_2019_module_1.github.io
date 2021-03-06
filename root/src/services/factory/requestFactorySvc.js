export default function createRequest(url, type, body = '') {
    switch(type) {
        case 'GET': return new Request(url, { method: "GET" });
        case 'POST': return new Request(url, { method: 'POST', body: body });
    }
}