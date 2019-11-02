import constants from '../core/constants';
import urlBuilder from '../services/urlBuilderSvc';
import { requestProxy } from '../services/requestProxySvc';

export default class EventController {

    constructor () {
        this.countryValue = "";
        this.categoryValue = "";
        this.countriesSelectEventListener();
        this.categoriesSelectEventListener();
    }

    searchButtonEventListener(callback) {
        let searchBtn = document.getElementById("search-btn");
            searchBtn.addEventListener("click", () => {
            const url = urlBuilder(this.countryValue, this.categoryValue);
            const request = requestProxy(url, "GET");
            callback(request, constants.UPDATE_MODE);
        });
    }

    countriesSelectEventListener() {
        let countriesSelectElement = document.getElementById("countries");
        countriesSelectElement.addEventListener("change", (event) => {
            this.countryValue = event.target.value;
        });
    }

    categoriesSelectEventListener() {
        let categoriesSelectElement = document.getElementById("categories");
        categoriesSelectElement.addEventListener("change", (event) => {
            this.categoryValue = event.target.value;
        });
    }
}