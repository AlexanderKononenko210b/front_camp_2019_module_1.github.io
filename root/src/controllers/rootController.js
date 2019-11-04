import EventController from './eventController';
import ViewController from './viewController';
import urlBuilder from '../services/urlBuilderSvc';
import fetchWrapper from '../shared/services/fetchWrapperSvc';
import { helper } from '../shared/helpers/helperSvc';
import { requestProxy } from '../services/requestProxySvc';
import constants from '../config/app.constants';
import enums from '../config/app.enums';
import config from '../config/app.config';

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
        try {
            const url = option ? urlBuilder(option.country, option.category) : urlBuilder();
            const request = requestProxy(url, "GET");
            const response = await fetchWrapper(request);
            const articles = helper.sliceArticles(response.articles, config.NUMBER_ROWS_TO_SHOW);

            if(option) {
                this.viewController.newsUpdate(articles);
            } else {
                this.viewController.newsInit(articles);
            }

            if(articles.filter((item) => {
                return helper.isValidLength(item.content, config.LIMIT_ARTICLE_LENGTH) === false;           
            }).length > 0) {
                throw new Error(enums.errors[0].message);
            }
        } catch(error) {
            const module = await import('../shared/services/errorHandlerSvc.js');
            const errorHandler = module.default;
            const handler = new errorHandler();
            handler.show(error);
            handler.log(error);
        }
    }
}