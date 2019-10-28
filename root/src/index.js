import './assets/style.css';
import dataLoader from './modules/dataLoader';
import constants from './share/constants';
import urlBuilder from './share/modules/urlBuilder';
import ContentBuilder from './modules/contentBuilder';

const getNews = async (url, mode) => {
    const response = await dataLoader(url);
    if(response && response.articles && response.articles.length > 0) {
        if(mode === constants.UPDATE_MODE) {
            let container = document.querySelector(".container");
            container.innerHTML = "";
        }
        contentBuilder.buildRecords(response.articles);
    }
};

const contentBuilder = new ContentBuilder();
contentBuilder.searchButtonEventListener(getNews);
const url = urlBuilder();
getNews(url, constants.START_MODE);
