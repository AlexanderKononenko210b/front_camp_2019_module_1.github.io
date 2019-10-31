export class ErrorHandlerSvc {

    constructor() {
        if( typeof ErrorHandlerSvc.instance === "object") {
            return ErrorHandlerSvc.instance;
        }

        ErrorHandlerSvc.instance = this;

        return ErrorHandlerSvc.instance;
    }

    show(error) {
        alert(error.message);
    }

    log(error) {
        console.log(`Error info: message:${error.message}`);
    }
}
