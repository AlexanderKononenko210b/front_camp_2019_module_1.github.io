import constants from '../constants';

export default function urlBuilder (country, category) {
    let url = constants.URL;

    url = country ? `${url}country=${country}` : `${url}country=us`;
    url = category ? `${url}&category=${category}` : `${url}`;
    url = constants.API_KEY ? `${url}&apiKey=${constants.API_KEY}` : `${url}`;

    return url;
}