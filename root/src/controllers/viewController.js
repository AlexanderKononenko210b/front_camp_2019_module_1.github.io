import ViewCategorySelect from '../views/viewCategorySelect';
import ViewCountrySelect from '../views/viewCountrySelect';
import ViewNewsRecord from '../views/viewNewsRecord';
import Controller from './Controller';
import enums from '../core/enums';
import constants from '../core/constants';

export default class ViewController extends Controller {

    constructor() {
        super();
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




