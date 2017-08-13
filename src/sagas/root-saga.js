import {spawn} from 'redux-saga/effects';
import {fetchArticlesListener} from './fetch-articles.js';

export default function* rootSaga () {
    yield [
        spawn(fetchArticlesListener),
    ]
};