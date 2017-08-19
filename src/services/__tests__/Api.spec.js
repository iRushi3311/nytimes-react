import {expect} from 'chai'
import nock from 'nock' // v9.0.2
import API, {defaultParams} from '../API.js';

describe('>>>> API Testing : Services/API ', () => {

    it('++++ test homepage request', () => {
        //setup
        nock('https://api.nytimes.com')
            .get('/svc/search/v2/articlesearch.json')
            .query(true) // regardless of the params passed in
            .reply(200, 'test data');

        API.fetchArticles('home', 0).then(response => {
            expect(response.data).toEqual('test data');
        });
    });

    it('++++ test search request', () => {
        //setup
        nock('https://api.nytimes.com')
            .get('/svc/search/v2/articlesearch.json')
            .query(true) // regardless of the params passed in
            .reply(200, 'test search data');

        API.searchArticles('home', 0).then(response => {
            expect(response.data).toEqual('test search data');
        });
    });
});