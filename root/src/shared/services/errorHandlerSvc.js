import ErrorHandlerPopUp from './errorHandlerPopUpSvc';
import { helper } from '../helpers/helperSvc';
import enums from '../../config/app.enums';

export default class ErrorHandler {

    constructor() {
        this.errorIndex = helper.getRandomInt(0, 3);
        this.popup = new ErrorHandlerPopUp();
    }

    show(error) {
        this.popup.show(error);
    }

    log(error) {
        console.log(`Error message:${error.message}`);
    }

    errorInit() {
        throw new Error(enums.errors[this.errorIndex]);
    }
}
