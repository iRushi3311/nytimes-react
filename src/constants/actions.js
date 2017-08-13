const asyncActionType = type => ({
    ACTION: `${type}_action`,
    SUCCESS: `${type}_success`,
    ERROR: `${type}_error`,
});

export const FETCH_ARTICLES = asyncActionType('fetch_articles');
