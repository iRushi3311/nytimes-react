import React from 'react';
import renderer from 'react-test-renderer';
import ArticleHero2 from '../article-hero-view-2.js';
import Article from "../../../models/article";
import {MemoryRouter} from 'react-router-dom';

describe('>>>C O M P O N E N T S --- snapshot test for ArticleHero2', () => {

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

        props = {
            article: articleObj
        };

        componentTree = renderer.create(
            <MemoryRouter>
                <ArticleHero2 {...props}/>
            </MemoryRouter>
        ).toJSON();
    });

    it('+++ ArticleHero2 match with snapshot ', () => {
        expect(componentTree).toMatchSnapshot();
    });

});