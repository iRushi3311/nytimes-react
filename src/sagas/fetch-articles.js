import {call, put, takeLatest, spawn, all} from 'redux-saga/effects';
import {FETCH_ARTICLES} from "../constants/actions.js";
import {fetchArticleSuccess, fetchArticleError} from '../actions/fetch-articles.js';
import API from '../services/API.js';
import _ from 'lodash';
import ResultWrapper from "../models/resultWrapper";

/**
 *  Worker sagas...
 */
export function*  fetchArticlesWorker(action) {
    try{
        const articleKey = _.get(action, 'payload.key');
        const pageOffset = _.get(action, 'payload.pageOffset');
        const isSearch = _.get(action, 'payload.isSearch');

        const articlesRAW = yield call(!isSearch ? API.fetchArticles : API.searchArticles, articleKey, pageOffset);

        const response = _.get(articlesRAW, 'data.response');
        const articlesResponse = new ResultWrapper(response);

        yield put(fetchArticleSuccess(articlesResponse));

    }catch (e){
        yield put(fetchArticleError(e.message));
    }
}


/**
*  Listener sagas...
*/
export function* fetchArticlesListener() {
    yield takeLatest(FETCH_ARTICLES.ACTION, fetchArticlesWorker);
}