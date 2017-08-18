import {call, put, takeLatest, spawn, all} from 'redux-saga/effects';
import Api from '../../services/API.js';
import { fetchArticlesListener, fetchArticlesWorker} from '../fetch-articles.js';
import {FETCH_ARTICLES} from "../../constants/actions.js";
import {fetchArticleSuccess, fetchArticleError} from '../../actions/fetch-articles.js';
import ResultWrapper from "../../models/resultWrapper";

describe(">>> FetchArticle Saga test", () => {

    let actual,
        expected;

    beforeEach(() => {
        actual = {};
        expected = {};
    });

    it("+++ saga FetchArticleListener test ", () => {
        //arrange
        const saga = fetchArticlesListener();
        expected = takeLatest(FETCH_ARTICLES.ACTION, fetchArticlesWorker);

        //act
        actual = saga.next().value;

        //assert
        expect(actual).toEqual(expected);
    });

    it("++++ saga FetchArticle success ", () => {
        //arrange
        const action = {
            payload:{
                key: 'abc',
                pageOffset: 1,
                isSearch: false
            }
        };
        const saga = fetchArticlesWorker(action);
        const rawResult = {
            docs: [
                {_id: 12345, web_url: 'google.com'},
                {_id: 98765, web_url: 'facebook.com'}
            ],
            meta:{
                hits: 17
            }
        };
        expected.call = call(Api.fetchArticles, action.payload.key, action.payload.pageOffset);
        expected.put = put(fetchArticleSuccess(rawResult));

        //act
        actual.call = saga.next().value;
        actual.put = saga.next(rawResult).value;

        //assert
        expect(actual.call).toEqual(expected.call);
        expect(actual.put.toString()).toEqual(expected.put.toString());

    });

    it("++++ saga FetchArticle - isSearch - success ", () => {
        //arrange
        const action = {
            payload:{
                key: 'abc',
                pageOffset: 1,
                isSearch: true
            }
        };
        const saga = fetchArticlesWorker(action);
        const rawResult = {
            docs: [
                {_id: 12345, web_url: 'google.com'},
                {_id: 98765, web_url: 'facebook.com'}
            ],
            meta:{
                hits: 17
            }
        };
        expected.call = call(Api.searchArticles, action.payload.key, action.payload.pageOffset);
        expected.put = put(fetchArticleSuccess(rawResult));

        //act
        actual.call = saga.next().value;
        actual.put = saga.next(rawResult).value;

        //assert
        expect(actual.call).toEqual(expected.call);
        expect(actual.put.toString()).toEqual(expected.put.toString());

    });

    it("++++ saga FetchArticle - failure ", () => {
        //arrange
        const message = 'Error!!';
        const saga = fetchArticlesWorker();
        expected.put = put(fetchArticleError(message));

        //act
        saga.next();
        actual.put = saga.throw({message}).value;

        //assert
        expect(actual).toEqual(expected);
    });

});