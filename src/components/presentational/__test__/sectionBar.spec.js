import React from 'react';
import renderer from 'react-test-renderer';
import SectionBar from '../section-bar.js';
import {MemoryRouter} from 'react-router-dom';

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