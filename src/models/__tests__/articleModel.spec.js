import Article from '../article.js';
import AppConstants from '../../constants/app-constants.js';

describe('Model Test --- ArticleModel ---', () => {

    it(' Test ArticleModel model (new) ', () => {
        //setup
        const src = {
            _id: 12345,
            web_url: 'google.com',
            headline:{
                main: 'So and so guy did bla bla bla'
            },
            snippet: 'body text body text body text body text body text body text ',
            byline:{
                original: 'By RPatel'
            },
            multimedia: [
                {
                    type: 'type-1',
                    subtype: 'subtype-X',
                    url: 'img_X',
                    height: '75px',
                    width: '75px'
                },
                {
                    type: 'type-3',
                    subtype: 'subtype-Z',
                    url: 'img_Z',
                    height: '75px',
                    width: '75px'
                },
            ],
            pub_date: '2017-08-17T09:00:01+0000'
        };


        //execute
        const actualArticle= new Article(src);
        const imageZ = actualArticle.findImageBySubType('subtype-Z');

        //verify
        expect(actualArticle.webUrl).toEqual(src.web_url);
        expect(actualArticle._id).toEqual(src._id);
        expect(actualArticle.title).toEqual(src.headline.main);
        expect(actualArticle.body).toEqual(src.snippet);
        expect(actualArticle.byline).toEqual(src.byline.original);
        expect(actualArticle.images.length).toEqual((src.multimedia.length));
        expect(actualArticle.publishDate).toEqual(new Date(src.pub_date));
        expect(imageZ.url).toEqual(AppConstants.MULTIMEDIA_BASE_URL + 'img_Z');

    });

    it(' Test ArticleModel model ', () => {
        //setup
        const src = {
            _id: 12345,
            web_url: 'google.com',
            headline:{
                main: 'So and so guy did bla bla bla'
            },
            snippet: 'body text body text body text body text body text body text ',
            byline:{
                original: 'By RPatel'
            },
            multimedia: [
                {
                    type: 'type-1',
                    subtype: 'subtype-X',
                    url: 'img_X',
                    height: '75px',
                    width: '75px'
                },
                {
                    type: 'type-3',
                    subtype: 'subtype-Z',
                    url: 'img_Z',
                    height: '75px',
                    width: '75px'
                },
            ],
            pub_date: '2017-08-17T09:00:01+0000'
        };


        //execute
        const actualArticle= Article(src);
        const imageZ = actualArticle.findImageBySubType('subtype-Z');

        //verify
        expect(actualArticle.webUrl).toEqual(src.web_url);
        expect(actualArticle._id).toEqual(src._id);
        expect(actualArticle.title).toEqual(src.headline.main);
        expect(actualArticle.body).toEqual(src.snippet);
        expect(actualArticle.byline).toEqual(src.byline.original);
        expect(actualArticle.images.length).toEqual((src.multimedia.length));
        expect(actualArticle.publishDate).toEqual(new Date(src.pub_date));
        expect(imageZ.url).toEqual(AppConstants.MULTIMEDIA_BASE_URL + 'img_Z');
    });

});
