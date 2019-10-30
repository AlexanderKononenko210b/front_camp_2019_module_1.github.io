export default async function fetchWrapperSvc(url) {
    const request = new Request(url);
    return await fetch(request)
        .then(async response => {
            return await response.json();
        })
        .catch(error => console.log(error));
}

