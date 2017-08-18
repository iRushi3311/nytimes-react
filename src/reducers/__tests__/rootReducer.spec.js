import {combineReducers} from 'redux';
import articlesWrapper from '../article_reducer.js';
import rootReducer from '../root-reducer.js';

describe('>>>> Reducer Test --- Root Reducer ---', () => {

    it('++++ Root Reducer test', () => {
        //setup
        const actual = combineReducers({
            articlesWrapper
        });
        const expected = rootReducer;

        //assert
        expect(actual.articlesWrapper).toEqual(expected.articlesWrapper);
    });

});
