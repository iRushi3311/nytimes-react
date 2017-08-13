import React, { Component } from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';

import Breadcumb from './breadcrumb.js';
import ArticleRow from './article-row.js';

import {fetchArticles} from "../../actions/fetch-articles.js";

const mapDispatchToProps = (dispatch) => ({
    fetchArticle: (key) => dispatch(fetchArticles(key))
});

const mapStateToProps = (state) => ({
    articles: state.articlesWrapper.articles,
    totalArticles: state.articlesWrapper.totalArticles,
});

class ArticleSearchView extends Component {


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
        this._makeFetchArticleCall(this.props);
    }

    componentWillReceiveProps(nextProps){
        const oldQS = _.get(this.props, 'match.params.queryString');
        const newQS = _.get(nextProps, 'match.params.queryString');

        this.setState({
            articles: nextProps.articles,
            totalArticles: nextProps.totalArticles,
        });

        //User changed category to view different articles!
        if(!_.isEqual(oldQS, newQS)){
            this._makeFetchArticleCall(nextProps);
        }
    }

    _makeFetchArticleCall(props){
        debugger;
        const {match} = props;
        const {params} = match;
        const {queryString} = params;
        const {nextPage} = this.state;

        this.props.fetchArticle({key:queryString, pageOffset:nextPage, isSearch:true});
    }

    render() {
        const {backName, currentName, match} = this.props;
        const {articles} = this.state;
        debugger;
        return (
            <div>
                <Breadcumb backName={backName} currentName={currentName} />
                {
                    articles.map((article, index) =>
                        <ArticleRow key={index} article={article} />
                    )
                }
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleSearchView);

