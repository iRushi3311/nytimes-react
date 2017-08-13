import {combineReducers} from 'redux';
import articlesWrapper from './article_reducer.js';

const rootReducer = combineReducers({
    articlesWrapper,
});

export default rootReducer;