import axios from 'axios';
const API_KEY = 'a8457610b68381085a3fff38d6a36337:6:74255139';

const URLs = {
    fetch: 'https://api.nytimes.com/svc/search/v2/articlesearch.json'
};

const URL_FQ_MAP = {
    home: 'news_desk:(\\"Editorial\\")', //Home is empty - replacing it with 'Editorial'
    world: 'news_desk:(\\"World\\")',
    us: 'news_desk:(\\"U.S.\\")',
    politics: 'news_desk:(\\"Politics\\")',
    ny: 'glocations:(\\"New York City\\")',
};

const defaultParams = {
    'api-key': API_KEY,
    'fq': URL_FQ_MAP.home,
    'page': 0,
    'sort': 'newest',
    'fl': '_id,headline,pub_date,snippet,byline,multimedia,web_url',
};

const API ={
    fetchArticles: (key, pageOffset) => {
        const beginDate = _getDate7DaysAgo();
        const params = {
            ...defaultParams,
            'begin_date': beginDate,
            fq: URL_FQ_MAP[key],
            page: pageOffset,
        };
        return axios.get(URLs.fetch, {params});
    },

    //FYI: Searching through headline only!!
    searchArticles:(queryString, pageOffset) => {
        const beginDate = _getDate7DaysAgo();
        const params = {
            ...defaultParams,
            'begin_date': beginDate,
            fq: 'headline:(\\"'+ queryString +'\\")',
            page: pageOffset,
        };
        return axios.get(URLs.fetch, {params});
    },
};

//TODO : replace manual conversion with moment.js (P3)
const _getDate7DaysAgo = function () {
    //Take date for today
    let date7DaysAgo = new Date();
    //Subtract 7-days
    date7DaysAgo = date7DaysAgo.setDate(date7DaysAgo.getDate() - 7);
    //Convert to YYYYMMDD and return as a String
    return new Date(date7DaysAgo).toISOString().slice(0,10).replace(/-/g,"");
};

export default API;