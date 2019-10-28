import constants from '../share/constants';
import countries from '../share/countries';
import categories from '../share/categories';
import urlBuilder from '../share/modules/urlBuilder';

export default class ContentBuilder {

    constructor() {
        this.countryValue = "";
        this.categoryValue = "";
        this.countriesSelectEventListener();
        this.categoriesSelectEventListener();
        this.buildCountries();
        this.buildCategories();
    }

    searchButtonEventListener(callback) {
        let searchBtn = document.getElementById("search-btn");
            searchBtn.addEventListener("click", () => {
            const url = urlBuilder(this.countryValue, this.categoryValue);
            callback(url, constants.UPDATE_MODE);
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

    buildRecords(news) {
        let container = document.querySelector(".container");
        for(let i = 0; i < constants.NUMBER_ROWS_TO_SHOW; ++i) {
            if(news[i]) {
                let row = document.createElement('div');
                row.className = "row";
                let rowHeader = document.createElement('h3');
                rowHeader.textContent = news[i].title;
                let rowContent = document.createElement('p');
                rowContent.textContent = news[i].content;
                row.appendChild(rowHeader);
                row.appendChild(rowContent);
                container.appendChild(row);
            }
        }
    }

    buildCountries() {
        let countriesDropdown = document.getElementById("countries");
        const defaultIndex = 0;
        if(countriesDropdown && countries.length > 0) {
            for(let i = 0; i < countries.length; ++i) {
                let option = document.createElement("option");
                option.textContent = countries[i].name;
                option.value = countries[i].alias;
                if(defaultIndex === 0) {
                    option.selected = true;
                    this.countryValue = countries[i].alias;
                }
                countriesDropdown.appendChild(option);
            }
        }
    }

    buildCategories() {
        let categoriesDropdown = document.getElementById("categories");
        const defaultIndex = 0;
        if(categoriesDropdown && categories.length > 0) {
            for(let i = 0; i < categories.length; ++i) {
                let option = document.createElement("option");
                option.textContent = categories[i];
                option.value = categories[i];
                if(defaultIndex === 0) {
                    option.selected = true;
                    this.categoryValue = categories[i];
                }
                categoriesDropdown.appendChild(option);
            }
        }
    }
}




