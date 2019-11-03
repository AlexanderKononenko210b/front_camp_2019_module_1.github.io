import { ViewRoot } from './viewRoot';

export default class ViewCountrySelect extends ViewRoot {
    constructor() {
        super();
        this.countriesDropdown = document.getElementById("countries");
    }

    createElement(country) {
        let option = document.createElement("option");
        option.textContent = country.name;
        option.value = country.alias;
        if(this.countriesDropdown.childElementCount == 0) {
            option.selected = true;
            this.selectedValue = country.alias;
        }
        this.countriesDropdown.appendChild(option);
    }

    render(countries) {
        if(countries && countries.length > 0) {
            super.render(countries, this.createElement.bind(this));
        }
    }
}