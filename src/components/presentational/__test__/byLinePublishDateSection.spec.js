import React from 'react';
import renderer from 'react-test-renderer';
import ByLinePublishTimeSection from '../byline-publish-date-section.js';

describe('>>>C O M P O N E N T S --- snapshot test for ByLinePublishTimeSection', () => {

    let props,
        componentTree;

    beforeEach(() => {
        props = {
            by: 'RPatel',
            publishdate: new Date('2017-08-17T09:00:01+0000')
        };
        componentTree = renderer.create(<ByLinePublishTimeSection {...props}/>).toJSON();
    });

    it('+++ ByLinePublishTimeSection match with snapshot ', () => {
        expect(componentTree).toMatchSnapshot();
    });

});