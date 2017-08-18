import React from 'react';
import renderer from 'react-test-renderer';
import BreadCrumb from '../breadcrumb.js';
import {MemoryRouter} from 'react-router-dom';

describe('>>>C O M P O N E N T S --- snapshot test for BreadCrumb', () => {

    let props,
        componentTree;

    beforeEach(() => {
        props = {
            backName: 'home',
            currentName: 'Search'
        };

        componentTree = renderer.create(
            <MemoryRouter>
                <BreadCrumb {...props}/>
            </MemoryRouter>
        ).toJSON();
    });

    it('+++ BreadCrumb match with snapshot ', () => {
        expect(componentTree).toMatchSnapshot();
    });

});