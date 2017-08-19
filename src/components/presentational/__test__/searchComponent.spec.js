import React from 'react';
import renderer from 'react-test-renderer';
import SearchComponent from '../search-component.js';
import {mount} from "enzyme";
import sinon from 'sinon';

import jsdom from 'jsdom';
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;
global.document = doc;
global.window = win;

describe('>>>C O M P O N E N T S --- snapshot test for SearchComponent', () => {

    let componentTree;

    beforeEach(() => {
        componentTree = renderer.create(
                <SearchComponent />
            ).toJSON();
    });

    it('+++ SearchComponent match with snapshot ', () => {
        expect(componentTree).toMatchSnapshot();
    });

});


describe(">>>C O M P O N E N T S --- mount test for SearchComponent", () => {

    let props = {},
        mountedSearchComponent;

    const searchComponent = () => {
        if (!mountedSearchComponent) {
            mountedSearchComponent = mount(
                    <SearchComponent {...props}/>
            );
        }
        return mountedSearchComponent;
    };


    beforeEach(() => {
        props = {
            reflectChange: function () {}
        };
        mountedSearchComponent = undefined;
    });

    it("always renders a div for SearchComponent", () => {
        const formSection = searchComponent().find("form");
        expect(formSection.length).toBeGreaterThan(0);
    });

    it("SearchComponent - _handleQueryString simulation", () => {
        const component = searchComponent();
        const wrapper = component.find("form");
        wrapper.find("input").simulate("change", {target: {value: "External ID"}});
        expect(component.state().qs).toEqual("External ID");
    });

    it("SearchComponent - handle formSubmission simulation", () => {
        const clickSpy = sinon.spy(SearchComponent.prototype, '_handleSearch');
        const wrapper = searchComponent();
        wrapper.find('form').first().simulate('submit');
        sinon.assert.calledOnce(clickSpy);
    });

});