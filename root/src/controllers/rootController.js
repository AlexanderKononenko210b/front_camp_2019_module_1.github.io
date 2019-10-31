import EventController from './eventController';
import ViewController from './viewController';
import dataSvc from '../services/dataSvc'
import urlBuilderSvc from '../services/urlBuilderSvc';
import constants from '../core/constants';
import requestFactorySvc from '../factory/requestFactory'

export default class RootController {

    constructor () {
        this.eventController = new EventController();
        this.viewController = new ViewController();
    }

    initiate () {
        this.eventController.searchButtonEventListener(this.getNews.bind(this));
        const url = urlBuilderSvc();
        const request = requestFactorySvc(url, "GET");
        this.getNews(request, constants.START_MODE);
    }

    async getNews (request, mode) {
        const response = await dataSvc(request);
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