export default async function fetchWrapper(request) {
    return await fetch(request)
        .then(async response => {
            return await response.json();
        })
        .catch(error => console.log(error));
}

