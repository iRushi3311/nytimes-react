import {FETCH_ARTICLES} from '../constants/actions.js';

export const fetchArticles = (payload) => ({
    type: FETCH_ARTICLES.ACTION,
    payload
});

export const fetchArticleSuccess = (payload) => ({
    type: FETCH_ARTICLES.SUCCESS,
    payload
});

export const fetchArticleError = (payload) => ({
    type: FETCH_ARTICLES.ERROR,
    payload
});