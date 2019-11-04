import ViewCategorySelect from '../views/viewCategorySelect';
import ViewCountrySelect from '../views/viewCountrySelect';
import ViewNewsRecord from '../views/viewNewsRecord';
import enums from '../config/app.enums';
import constants from '../config/app.constants';

export default class ViewController {

    constructor() {
        this.categorySelect = new ViewCategorySelect();
        this.countrySelect = new ViewCountrySelect();
        this.viewNewsRecord = new ViewNewsRecord();
    }

    initiate() {
        this.categorySelect.render(enums.categories);
        this.countrySelect.render(enums.countries);
    }

    newsInit(news) {
        this.viewNewsRecord.render(news, constants.START_MODE);
    }

    newsUpdate(news) {
        this.viewNewsRecord.render(news, constants.UPDATE_MODE);
    }
}




