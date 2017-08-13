import {FETCH_ARTICLES} from "../constants/actions.js";

const INITIAL_STATE = {
    articles: [],
    totalArticles: 0,
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case FETCH_ARTICLES.SUCCESS:
            return {
                ...state,
                articles: action.payload.articles,
                totalArticles: action.payload.totalArticles,
            };
        default:
            return state;
    }
}