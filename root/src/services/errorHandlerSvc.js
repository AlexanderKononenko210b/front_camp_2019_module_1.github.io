export class ErrorHandler {

    constructor() {
        if( typeof ErrorHandler.instance === "object") {
            return ErrorHandler.instance;
        }

        ErrorHandler.instance = this;

        return ErrorHandler.instance;
    }

    show(error) {
        window.alert(error.message);
    }

    log(error) {
        console.log(`Test error info: message:${error.message}`);
    }
}
