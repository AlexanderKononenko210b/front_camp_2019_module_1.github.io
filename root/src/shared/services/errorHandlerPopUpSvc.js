export default class ErrorHandlerPopUp {
    constructor () {
        if( typeof ErrorHandlerPopUp.instance === "object") {
            return ErrorHandlerPopUp.instance;
        }
        ErrorHandlerPopUp.instance = this;
        return ErrorHandlerPopUp.instance;
    }

    show(error) {
        window.alert(error.message);
    }
}