import config from '../config/app.config';

export default function urlBuilder(country, category) {
    let url = config.URL;

    url = country ? `${url}country=${country}` : `${url}country=us`;
    url = category ? `${url}&category=${category}` : `${url}`;
    url = config.API_KEY ? `${url}&apiKey=${config.API_KEY}` : `${url}`;

    return url;
}