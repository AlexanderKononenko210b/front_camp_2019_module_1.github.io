import { ViewRoot } from './viewRoot';

export default class ViewCategorySelect extends ViewRoot {
    constructor() {
        super();
        this.categoriesDropdown = document.getElementById("categories");
    }

    createElement(category) {
        let option = document.createElement("option");
        option.textContent = category;
        option.value = category;
        if(this.categoriesDropdown.childElementCount == 0) {
            option.selected = true;
            this.selectedValue = category;
        }
        this.categoriesDropdown.appendChild(option);
    }

    render(categories) {
        if(categories && categories.length > 0) {
            super.render(categories, this.createElement.bind(this));
        }
    }
}