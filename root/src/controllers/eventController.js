import Controller from './Controller';
export default class EventController extends Controller {

    constructor () {
        super();
        this.countriesSelectEventListener();
        this.categoriesSelectEventListener();
    }

    searchButtonEventListener(action) {
        if(action) {
            let searchBtn = document.getElementById("search-btn");
            searchBtn.addEventListener("click", () => {
            action({ country: this.countryValue, category: this.categoryValue });
        });
        }
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