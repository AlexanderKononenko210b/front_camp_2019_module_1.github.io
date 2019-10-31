export function errorHandlerSvc(error) {
    if(error) {
        console.log(`Error info: message:${error.message}`);
    }
}
