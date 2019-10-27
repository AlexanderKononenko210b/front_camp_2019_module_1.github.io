import './assets/style.css';
import load from './modules/load';
import constants from './share/constants';
import countries from './share/countries';
import categories from './share/categories';

let countryValue = "";
let categoryValue = "";

const url = buildUrl();
getNews(url, constants.START_MODE);
buildCountries();
buildCategories();

let searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", () => {
    const url = buildUrl(countryValue, categoryValue);
    getNews(url, constants.UPDATE_MODE);
});

let countriesSelectElement = document.getElementById("countries");
countriesSelectElement.addEventListener("change", (event) => {
    countryValue = event.target.value;
});

let categoriesSelectElement = document.getElementById("categories");
categoriesSelectElement.addEventListener("change", (event) => {
    categoryValue = event.target.value;
});

function buildUrl (country, category) {
    let url = constants.URL;

    url = country ? `${url}country=${country}` : `${url}country=us`;
    url = category ? `${url}&category=${category}` : `${url}`;
    url = constants.API_KEY ? `${url}&apiKey=${constants.API_KEY}` : `${url}`;

    return url;
}


async function getNews(url, mode) {
    const response = await load(url);
    if(response && response.articles && response.articles.length > 0) {
        if(mode === constants.UPDATE_MODE) {
            let container = document.querySelector(".container");
            container.innerHTML = "";
        }
        buildRecords(response.articles);
    }
}

function buildRecords (news) {
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

function buildCountries () {
    let countriesDropdown = document.getElementById("countries");
    const defaultIndex = 0;
    if(countriesDropdown && countries.length > 0) {
        for(let i = 0; i < countries.length; ++i) {
            let option = document.createElement("option");
            option.textContent = countries[i].name;
            option.value = countries[i].alias;
            if(defaultIndex === 0) {
                option.selected = true;
                countryValue = countries[i].alias;
            }
            countriesDropdown.appendChild(option);
        }
    }
}

function buildCategories () {
    let categoriesDropdown = document.getElementById("categories");
    const defaultIndex = 0;
    if(categoriesDropdown && categories.length > 0) {
        for(let i = 0; i < categories.length; ++i) {
            let option = document.createElement("option");
            option.textContent = categories[i];
            option.value = categories[i];
            if(defaultIndex === 0) {
                option.selected = true;
                categoryValue = categories[i];
            }
            categoriesDropdown.appendChild(option);
        }
    }
}
