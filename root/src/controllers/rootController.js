import EventController from './eventController';
import ViewController from './viewController';
import newsLoader from '../services/newsLoaderSvc.js';
import urlBuilder from '../services/urlBuilderSvc';
import constants from '../core/constants';
import { requestProxy } from '../services/requestProxySvc';

export default class RootController {

    constructor () {
        this.eventController = new EventController();
        this.viewController = new ViewController();
    }

    initiate () {
        this.eventController.searchButtonEventListener(this.getNews.bind(this));
        const url = urlBuilder();
        const request = requestProxy(url, "GET");
        this.getNews(request, constants.START_MODE);
    }

    async getNews (request, mode) {
        const response = await newsLoader(request);
        if(response && response.articles && response.articles.length > 0) {
            if(mode === constants.UPDATE_MODE) {
                let container = document.querySelector(".container");
                container.innerHTML = "";
            }
            this.buildRecords(response.articles);
        }
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
}