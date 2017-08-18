import {fetchArticles, fetchArticleSuccess, fetchArticleError} from '../fetch-articles.js';
import {FETCH_ARTICLES} from '../../constants/actions.js';


describe('Action Test --- fetch article actions ---', () => {


    it(' Test fetchArticles Action ', () => {
        //setup
        const dummyPayload = {foo:'bar'};
        const expectedAction = {
            type: FETCH_ARTICLES.ACTION,
            payload: dummyPayload
        };

        //execute
        const actualAction = fetchArticles(dummyPayload);

        //verify
        expect(expectedAction).toEqual(actualAction);
    });

    it(' Test fetchArticleSuccess Action ', () => {
        //setup
        const dummyPayload = {foo:'bar'};
        const expectedAction = {
            type: FETCH_ARTICLES.SUCCESS,
            payload: dummyPayload
        };

        //execute
        const actualAction = fetchArticleSuccess(dummyPayload);

        //verify
        expect(expectedAction).toEqual(actualAction);
    });

    it(' Test fetchArticleError Action ', () => {
        //setup
        const dummyPayload = {foo:'bar'};
        const expectedAction = {
            type: FETCH_ARTICLES.ERROR,
            payload: dummyPayload
        };

        //execute
        const actualAction = fetchArticleError(dummyPayload);

        //verify
        expect(expectedAction).toEqual(actualAction);
    });

});
