import React, { Component } from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import InfiniteScroll from 'react-infinite-scroller';

import ArticleHero from '../presentational/article-hero-view.js';
import ArticleHero2 from '../presentational/article-hero-view-2.js';
import ArticleRow from '../presentational/article-row.js';

import {fetchArticles} from "../../actions/fetch-articles.js";
import AppConstants from '../../constants/app-constants.js';

const mapDispatchToProps = (dispatch) => ({
   fetchArticle: (key) => dispatch(fetchArticles(key))
});

const mapStateToProps = (state) => ({
    articles: state.articlesWrapper.articles,
    totalArticles: state.articlesWrapper.totalArticles,
});

const DEFAULT_STATE = {
    articles:[],
    totalArticles: 0,
    hasMore: true,
};

export class ArticleListView extends Component {

    constructor(props){
        super(props);

        this.state = DEFAULT_STATE;

        this._makeFetchArticleCall = this._makeFetchArticleCall.bind(this);
        this._loadMoreArticles = this._loadMoreArticles.bind(this);
    }


    componentDidMount(){
        debugger;
        this._makeFetchArticleCall(this.props.category, 0);
    }

    componentWillReceiveProps(nextProps){

        //User changed category to view different articles!
        if(!_.isEqual(this.props.category, nextProps.category)){
            // need to reset the state
            this.setState({...DEFAULT_STATE});

            debugger;
            this._makeFetchArticleCall(nextProps.category, 0);

            // Short circuit the function
            return;
        }

        const {articles} = this.state;
        const newArticles = nextProps.articles;
        const updatedArticles = articles.concat(newArticles);
        this.setState({
            articles: updatedArticles,
            totalArticles: nextProps.totalArticles,
            hasMore: (nextProps.totalArticles > updatedArticles.length)
        });

    }

    _makeFetchArticleCall(category, nextPage){
        this.props.fetchArticle({
            key:category,
            pageOffset:nextPage,
            isSearch:false
        });
    }

    //TODO: Add failover mechanism
    //This will fail upon error in any call made in the page-sequence!
    _loadMoreArticles(){
        const {totalArticles, articles} = this.state;

        if(articles.length < totalArticles) {
            //Make API call - if needed
            this._makeFetchArticleCall(this.props.category, (articles.length / AppConstants.PAGE_SIZE));
        }

        this.setState({hasMore: false});
    }

    render() {
        const {articles, hasMore} = this.state;
        const articlesN_3 = articles.slice(3);
        if(_.isEmpty(articles)) {
            return null;
        }

        return (
            <div>

                <ArticleHero article={articles.length >= 1 ? articles[0] : null }/>
                <ArticleHero2 article={articles.length >= 2 ? articles[1] : null } />
                <ArticleHero2 article={articles.length >= 3 ? articles[2] : null }/>

                <div style={{float:'none', clear:'both'}} />
                <InfiniteScroll pageStart={0}
                                loadMore={this._loadMoreArticles}
                                hasMore={hasMore}
                                loader={<div className="loader">Loading ...</div>}
                >
                    {
                        articlesN_3.map((article, index) =>
                            <ArticleRow key={index} article={article} firstRow={index === 0 ? true : false}/>
                        )
                    }
                </InfiniteScroll>

            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleListView);
