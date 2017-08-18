import ResultWrapper from '../resultWrapper.js';

describe('Model Test --- ResultWrapper ---', () => {

    it(' Test ResultWrapper model (new) ', () => {
        //setup
        const src = {
            docs: [
                {_id: 12345, web_url: 'google.com'},
                {_id: 98765, web_url: 'facebook.com'}
            ],
            meta:{
                hits: 17
            }
        };

        //execute
        const actualResultWrapper = new ResultWrapper(src);

        //verify
        expect(actualResultWrapper.totalArticles).toEqual(src.meta.hits);
        expect(actualResultWrapper.articles.length).toEqual(src.docs.length);
        expect(actualResultWrapper.articles[0]._id).toEqual(src.docs[0]._id);
    });

    it(' Test ResultWrapper model ', () => {
        //setup
        const src = {
            docs: [
                {_id: 12345, web_url: 'google.com'},
                {_id: 98765, web_url: 'facebook.com'}
            ],
            meta:{
                hits: 11
            }
        };

        //execute
        const actualResultWrapper = ResultWrapper(src);

        //verify
        expect(actualResultWrapper.totalArticles).toEqual(src.meta.hits);
        expect(actualResultWrapper.articles.length).toEqual(src.docs.length);
        expect(actualResultWrapper.articles[0]._id).toEqual(src.docs[0]._id);
    });

});
