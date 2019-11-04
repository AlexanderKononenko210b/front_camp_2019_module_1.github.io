import { ViewRoot } from './viewRoot';
import constants from '../config/app.constants';

export default class ViewNewsRecord extends ViewRoot {
    constructor() {
        super();
        this.container = this.getParent();
    }

    getParent() {
        return document.querySelector(".container");
    }

    createElement(article) {
        let row = document.createElement('div');
        row.className = "row";
        let rowHeader = document.createElement('h3');
        rowHeader.textContent = article.title;
        let rowContent = document.createElement('p');
        rowContent.textContent = article.content;
        row.appendChild(rowHeader);
        row.appendChild(rowContent);
        this.container.appendChild(row);
    }

    render(news, mode) {
        if(news && news.length > 0 && mode) {
            this.container = this.getParent();
            if(mode === constants.UPDATE_MODE) {
                this.container.innerHTML = "";
            }

            super.render(news, this.createElement.bind(this));
        }
    }
}