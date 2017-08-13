import React, { Component } from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';

import ArticleHero from '../presentational/article-hero-view.js';
import ArticleHero2 from '../presentational/article-hero-view-2.js';
import ArticleRow from '../presentational/article-row.js';

import {fetchArticles} from "../../actions/fetch-articles.js";


const mapDispatchToProps = (dispatch) => ({
   fetchArticle: (key) => dispatch(fetchArticles(key))
});

const mapStateToProps = (state) => ({
    articles: state.articlesWrapper.articles,
    totalArticles: state.articlesWrapper.totalArticles,
});


export class ArticleListView extends Component {

    constructor(props){
        super(props);

        this.state = {
            articles:[],
            totalArticles: 0,
            currentPage: 0,
            nextPage:0,
        };

        this._makeFetchArticleCall = this._makeFetchArticleCall.bind(this);
    }


    componentDidMount(){
        this._makeFetchArticleCall(this.props.category);
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            articles: nextProps.articles,
            totalArticles: nextProps.totalArticles,
        });

        //User changed category to view different articles!
        if(!_.isEqual(this.props.category, nextProps.category)){
            this._makeFetchArticleCall(nextProps.category);
        }

    }

    _makeFetchArticleCall(category){
        const {nextPage} = this.state;
        this.props.fetchArticle({key:category, pageOffset:nextPage, isSearch:false});
    }

    render() {
        const {articles} = this.state;
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

                {
                    articlesN_3.map((article, index) =>
                        <ArticleRow key={index} article={article} firstRow={index === 0 ? true : false}/>
                    )
                }

            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleListView);
