import React from 'react';
import renderer from 'react-test-renderer';
import AppHeader from '../app-header.js';

describe('>>>C O M P O N E N T S --- snapshot test for AppHeader', () => {

    let componentTree;

    beforeEach(() => {
        componentTree = renderer.create(<AppHeader />).toJSON();
    });

    it('+++ AppHeader match with snapshot ', () => {
        expect(componentTree).toMatchSnapshot();
    });

});