import React from 'react';
import {shallow} from 'enzyme';
import App from './App.js';

describe(">>>> APP - shallow render app", () => {
    let wrapper;

    beforeEach(() => {
       wrapper = shallow(<App />);
    });

    it('renders without crashing', () => {
        expect(wrapper.length).toEqual(1);
    });

});
