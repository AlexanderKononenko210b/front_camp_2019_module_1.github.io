export const helper = {
    getRandomInt: (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    },
    sliceArticles: (articles, limit) => {
        return articles && articles.length > limit
            ? articles.slice(limit)
            : articles;
    },
    isValidLength: (article, validLength) => {
        return article && article.length <= validLength;
    }
};