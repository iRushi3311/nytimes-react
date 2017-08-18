import React from 'react';
import renderer from 'react-test-renderer';
import SearchComponent from '../search-component.js';
import {MemoryRouter} from 'react-router-dom';

describe('>>>C O M P O N E N T S --- snapshot test for SearchComponent', () => {

    let componentTree;

    beforeEach(() => {
        componentTree = renderer.create(
            <MemoryRouter>
                <SearchComponent />
            </MemoryRouter>).toJSON();
    });

    it('+++ SearchComponent match with snapshot ', () => {
        expect(componentTree).toMatchSnapshot();
    });

});