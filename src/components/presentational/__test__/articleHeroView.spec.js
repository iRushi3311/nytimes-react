import React from 'react';
import renderer from 'react-test-renderer';
import {mount} from "enzyme";
import {MemoryRouter} from 'react-router-dom';
import ArticleHero from '../article-hero-view.js';
import Article from "../../../models/article";
import AppConstants from '../../../constants/app-constants.js';

import jsdom from 'jsdom';
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;
global.document = doc;
global.window = win;

describe('>>>C O M P O N E N T S --- snapshot test for ArticleHero', () => {

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
                <ArticleHero {...props}/>
            </MemoryRouter>
        ).toJSON();
    });

    it('+++ ArticleHero match with snapshot ', () => {
        expect(componentTree).toMatchSnapshot();
    });

});

describe('>>>C O M P O N E N T S --- mount test for ArticleHero', () => {

    let props,
        mountedArticleHeroView;

    const articleHero = () => {
        if (!mountedArticleHeroView) {
            mountedArticleHeroView = mount(
                <MemoryRouter>
                    <ArticleHero {...props}/>
                </MemoryRouter>
            );
        }
        return mountedArticleHeroView;
    };


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

        mountedArticleHeroView = undefined;
    });

    it("always renders a div for ArticleHero", () => {
        const divs = articleHero().find("div");
        const wrappingDiv = divs.first();
        expect(divs.length).toBeGreaterThan(0);
    });

    it("ArticleHero - placeholder thumbnail-img", () => {
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
            multimedia: [],
            pub_date: '2017-08-17T09:00:01+0000'
        };
        const articleObj = new Article(src);

        props = {
            article: articleObj
        };
        const image = articleHero().find(".thumbnail-img");

        expect(image.node.src).toEqual(AppConstants.THUMBNAILPLACEHOLDERURL);
    });

});