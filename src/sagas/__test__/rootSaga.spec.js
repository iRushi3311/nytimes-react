import {spawn} from 'redux-saga/effects';

import rootSaga from '../root-saga.js';
import {fetchArticlesListener} from '../fetch-articles.js';

describe('Saga Tests --- root-saga ---', () => {
    let actual,
        expected;

    beforeEach(() => {
        actual = null;
        expected = null;
    });

    it(' Test root-saga ', () => {
        //setup
        const saga = rootSaga();

        expected = [
            spawn(fetchArticlesListener),
        ];

        //act
        actual = saga.next().value;

        //assert
        expect(actual).toEqual(expected);
    });

});
