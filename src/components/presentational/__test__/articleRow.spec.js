import React from 'react';
import renderer from 'react-test-renderer';
import {mount} from "enzyme";
import ArticleRow from '../article-row.js';
import Article from "../../../models/article";
import {MemoryRouter} from 'react-router-dom';

import jsdom from 'jsdom';
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;
global.document = doc;
global.window = win;

describe('>>>C O M P O N E N T S --- snapshot test for ArticleRow', () => {

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
                <ArticleRow {...props}/>
            </MemoryRouter>
        ).toJSON();
    });

    it('+++ ArticleRow match with snapshot ', () => {
        expect(componentTree).toMatchSnapshot();
    });

});

describe('>>>C O M P O N E N T S --- mounted test for ArticleRow', () => {
    let props,
        mountedArticleRow;

    const articleRow = () => {
        if (!mountedArticleRow) {
            mountedArticleRow = mount(
                <MemoryRouter>
                    <ArticleRow {...props} />
                </MemoryRouter>
            );
        }
        return mountedArticleRow;
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

        mountedArticleRow = undefined;
    });

    it("always renders a div for ArticleRow", () => {
        const divs = articleRow().find("div");
        const wrappingDiv = divs.first();
        expect(divs.length).toBeGreaterThan(0);
    });

    it("ArticleRow - first row", () => {
        props ={
            ...props,
            firstRow: true
        };
        const divs = articleRow().find("div");
        const wrappingDiv = divs.first();
        expect(divs.find('.article-row-first').length).toEqual(1);
    });

    it("ArticleRow - article row without thumbnail-img", () => {
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
        const divs = articleRow().find("div");
        const wrappingDiv = divs.first();
        expect(divs.length).toBeGreaterThan(0);
    });
});