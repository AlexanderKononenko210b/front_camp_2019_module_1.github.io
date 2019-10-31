export default async function fetchWrapperSvc(request) {
    return await fetch(request)
        .then(async response => {
            return await response.json();
        })
        .catch(error => console.log(error));
}

