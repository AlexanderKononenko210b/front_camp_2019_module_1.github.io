import ErrorHandlerPopUp from './errorHandlerPopUpSvc';
export default class ErrorHandler {

    constructor(error) {
        this.error = error;
        this.popup = new ErrorHandlerPopUp();
    }

    show() {
        this.popup.show(this.error);
    }

    log() {
        console.log(`Test error info: message:${this.error.message}`);
    }
}
