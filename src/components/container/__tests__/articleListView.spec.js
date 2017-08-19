import React from 'react';
import renderer from 'react-test-renderer';
import {ArticleListView} from '../article-list-view.js';
import Article from "../../../models/article";
import {MemoryRouter} from 'react-router-dom';

describe('>>>C O M P O N E N T S --- snapshot test for ArticleListView', () => {

    let props,
        componentTree;

    beforeEach(() => {
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
                    subtype: 'thumbnail',
                    url: 'img_Z',
                    height: '75px',
                    width: '75px'
                },
            ],
            pub_date: '2017-08-17T09:00:01+0000'
        };
        const articleObj = new Article(src);
        const articles = [articleObj, articleObj, articleObj, articleObj, articleObj, articleObj];

        props = {
            match: {
                params: {
                    queryString: 'obama'
                }
            },
            articles: articles,
            totalArticles: 6,
            fetchArticle: function () {},
        };

        componentTree = renderer.create(
            <MemoryRouter >
                <ArticleListView {...props}/>
            </MemoryRouter>
        ).toJSON();
    });

    it('+++ ArticleListView match with snapshot ', () => {
        expect(componentTree).toMatchSnapshot();
    });

});