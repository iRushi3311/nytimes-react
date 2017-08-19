import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';
import {mount} from "enzyme";
import ArticleDetailView from '../article-detail-view.js';
import Article from "../../../models/article";
import AppConstants from '../../../constants/app-constants.js';

import jsdom from 'jsdom';
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;
global.document = doc;
global.window = win;

describe('>>>C O M P O N E N T S --- snapshot test for ArticleDetailView', () => {

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
            location: {
                pathname: '/article/123',
                query: {
                    article: articleObj
                }
            },
            backName: 'home',
            currentName: 'Article'
        };

        componentTree = renderer.create(
            <MemoryRouter >
                <ArticleDetailView {...props}/>
            </MemoryRouter>
        ).toJSON();
    });

    it('+++ ArticleDetailView match with snapshot ', () => {
        expect(componentTree).toMatchSnapshot();
    });

});

describe('>>>C O M P O N E N T S --- mount test for ArticleDetailView', () => {

    let props,
        mountedArticleDetailViw;

    const articleDetailView = () => {
        if (!mountedArticleDetailViw) {
            mountedArticleDetailViw = mount(
                <MemoryRouter>
                    <ArticleDetailView {...props}/>
                </MemoryRouter>
            );
        }
        return mountedArticleDetailViw;
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
            location: {
                pathname: '/article/123',
                query: {
                    article: articleObj
                }
            },
            backName: 'home',
            currentName: 'Article'
        };

        mountedArticleDetailViw = undefined;
    });

    it("always renders a div for ArticleDetailView", () => {
        const divs = articleDetailView().find("div");
        const wrappingDiv = divs.first();
        expect(divs.length).toBeGreaterThan(0);
    });

    it("ArticleDetailView - placeholder thumbnail-img", () => {
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
            location: {
                pathname: '/article/123',
                query: {
                    article: articleObj
                }
            },
            backName: 'home',
            currentName: 'Article'
        };
        const image = articleDetailView().find(".thumbnail-img");
        expect(image.node.src).toEqual(AppConstants.THUMBNAILPLACEHOLDERURL);
    });

});