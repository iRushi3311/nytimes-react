import Article from './article.js';

const ResultWrapper = function (src) {
    let self = this;

    if( !(this instanceof ResultWrapper)) {
        return new ResultWrapper(src);
    }

    this.articles = [];

    src.docs && src.docs.forEach(doc => {
        let article = new Article(doc);
        self.articles.push(article);
    });

    this.totalArticles = src.meta.hits;

    return this;

};

export default ResultWrapper;