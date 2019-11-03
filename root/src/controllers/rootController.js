import EventController from './eventController';
import ViewController from './viewController';
import urlBuilder from '../services/urlBuilderSvc';
import newsLoader from '../services/newsLoaderSvc';
import { requestProxy } from '../services/requestProxySvc';
import constants from '../core/constants';

export default class RootController {

    constructor () {
        this.eventController = new EventController();
        this.viewController = new ViewController();
    }

    initiate() {
        this.viewController.initiate();
        this.eventController.searchButtonEventListener(this.getNews.bind(this));
        this.getNews();
    }

    async getNews(option) {
        const url = option ? urlBuilder(option.country, option.category) : urlBuilder();
        const request = requestProxy(url, "GET");
        const response = await newsLoader(request);
        let articles = response.articles.length > constants.NUMBER_ROWS_TO_SHOW
            ? response.articles.slice(constants.NUMBER_ROWS_TO_SHOW)
            : response.articles;

        if(option) {
            this.viewController.newsUpdate(articles);
        } else {
            this.viewController.newsInit(articles);
        }
    }
}