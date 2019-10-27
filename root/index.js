import './assets/style.css';
import load from './modules/load';
import constants from './share/constants';

getNews(constants.START_MODE);

let updateBtn = document.getElementById("btn");
updateBtn.addEventListener("click", () => {
    getNews(constants.UPDATE_MODE);
});

async function getNews(mode) {
    const response = await load();
    if(response && response.articles && response.articles.length > 0) {
        if(mode === constants.UPDATE_MODE) {
            let container = document.querySelector(".container");
            container.innerHTML = "";
        }
        addNewsLines(response.articles);
    }
}

function addNewsLines (news) {
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
