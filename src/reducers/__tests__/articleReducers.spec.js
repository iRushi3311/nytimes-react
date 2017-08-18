import ArticleReducer from '../article_reducer.js';
import {FETCH_ARTICLES} from '../../constants/actions.js';
import Article from "../../models/article";

describe('Reducer Test --- Article_Reducer ---', () => {

    let defaultArticles, defaultTotalArticles;

    beforeEach(() => {
        defaultArticles = [
            new Article({_id: 12345, web_url: 'google.com'}),
            new Article({_id: 98765, web_url: 'facebook.com'})
        ];

        defaultTotalArticles = 10;
    });

    it('Empty/Non-Identified Action - non-init state', () => {
        //setup
        const action = {type: 'NONE'};

        //execute
        const actualState = ArticleReducer(undefined, action);

        //verify
        expect(actualState.articles).toEqual([]);
        expect(actualState.totalArticles).toEqual(0);
    });

    it('Empty/Non-Identified Action - with default state', () => {
        //setup
        const action = {type: 'NONE'};
        const defaultState = {
            articles:defaultArticles,
            totalArticles:defaultTotalArticles
        };

        //execute
        let actualState = ArticleReducer(defaultState, action);

        //verify
        expect(actualState.articles).toEqual(defaultArticles);
        expect(actualState.totalArticles).toEqual(defaultTotalArticles);
    });

    it('FETCH_ARTICLES.Success Action - with empty default state', () => {
        //setup
        const payload = {
            articles: defaultArticles,
            totalArticles: defaultTotalArticles,
        }

        const action = {type: FETCH_ARTICLES.SUCCESS, payload };

        //execute
        let actualState = ArticleReducer(undefined, action);

        //verify
        expect(actualState.articles).toEqual(defaultArticles);
        expect(actualState.totalArticles).toEqual(defaultTotalArticles);
    });


    it('FETCH_ARTICLES.Success Action - with default state', () => {
        //setup

        const defaultState = {
            articles:defaultArticles,
            totalArticles:defaultTotalArticles
        };
        const newArticles = [
            new Article({_id: 1, web_url: 'google.com'}),
            new Article({_id: 2, web_url: 'facebook.com'}),
            new Article({_id: 3, web_url: 'yahoo.com'}),
        ];

        const payload = {
            articles: newArticles,
            totalArticles: 15,
        }

        const action = {type: FETCH_ARTICLES.SUCCESS, payload };

        //execute
        let actualState = ArticleReducer(defaultState, action);

        //verify
        expect(actualState.articles).toEqual(newArticles);
        expect(actualState.totalArticles).toEqual(15);
    });



});
