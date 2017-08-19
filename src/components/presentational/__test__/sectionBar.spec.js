import React from 'react';
import renderer from 'react-test-renderer';
import sinon from 'sinon';
import SectionBar from '../section-bar.js';
import {mount} from "enzyme";
import {MemoryRouter} from 'react-router-dom';

import jsdom from 'jsdom';
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;
global.document = doc;
global.window = win;


describe('>>>C O M P O N E N T S --- snapshot test for SectionBar', () => {

    let componentTree;

    beforeEach(() => {
        componentTree = renderer.create(
            <MemoryRouter>
                <SectionBar />
            </MemoryRouter>).toJSON();
    });

    it('+++ SectionBar match with snapshot ', () => {
        expect(componentTree).toMatchSnapshot();
    });

});

describe('>>>C O M P O N E N T S --- mount test for SectionBar', () => {

    let props = {},
        mountedSectionBar;

    const sectionBar = () => {
        if (!mountedSectionBar) {
            mountedSectionBar = mount(
                <MemoryRouter>
                    <SectionBar {...props}/>
                </MemoryRouter>
            );
        }
        return mountedSectionBar;
    };


    beforeEach(() => {
        props = {
            reflectChange: function () {}
        };
        mountedSectionBar = undefined;
    });

    it("always renders a div for SectionBar", () => {
        const divs = sectionBar().find("ul");
        const wrappingDiv = divs.first();
        expect(divs.length).toBeGreaterThan(0);
    });

    it("SectionBar - handleClick simulation", () => {
        const clickSpy = sinon.spy(SectionBar.prototype, '_handleListItemSelection');
        const wrapper = sectionBar();
        wrapper.find('li').first().simulate('click');
        sinon.assert.calledOnce(clickSpy);
    });

});