import enums from '../core/enums';

export default class ViewController {

    constructor() {
        this.buildCountries();
        this.buildCategories();
    }

    buildCountries() {
        let countriesDropdown = document.getElementById("countries");
        const defaultIndex = 0;
        if(countriesDropdown && enums.countries.length > 0) {
            for(let i = 0; i < enums.countries.length; ++i) {
                let option = document.createElement("option");
                option.textContent = enums.countries[i].name;
                option.value = enums.countries[i].alias;
                if(defaultIndex === 0) {
                    option.selected = true;
                    this.countryValue = enums.countries[i].alias;
                }
                countriesDropdown.appendChild(option);
            }
        }
    }

    buildCategories() {
        let categoriesDropdown = document.getElementById("categories");
        const defaultIndex = 0;
        if(categoriesDropdown && enums.categories.length > 0) {
            for(let i = 0; i < enums.categories.length; ++i) {
                let option = document.createElement("option");
                option.textContent = enums.categories[i];
                option.value = enums.categories[i];
                if(defaultIndex === 0) {
                    option.selected = true;
                    this.categoryValue = enums.categories[i];
                }
                categoriesDropdown.appendChild(option);
            }
        }
    }
}




