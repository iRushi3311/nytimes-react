import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Pagination} from 'react-bootstrap';
import _ from 'lodash';
import Breadcumb from '../presentational/breadcrumb.js';
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

export class ArticleSearchView extends Component {

    constructor(props){
        super(props);
        this.state = {
            articles:[],
            totalArticles: 0,
            activePage: 1,
        };
        this._makeFetchArticleCall = this._makeFetchArticleCall.bind(this);
        this._handlePageSelection = this._handlePageSelection.bind(this);
    }


    componentDidMount(){
        const qs = _.get(this.props, 'match.params.queryString');
        this._makeFetchArticleCall(qs, 0); //On-Load pageOffset is - 0
    }

    componentWillReceiveProps(nextProps){
        const oldQS = _.get(this.props, 'match.params.queryString');
        const newQS = _.get(nextProps, 'match.params.queryString');

        this.setState({
            articles: nextProps.articles,
            totalArticles: nextProps.totalArticles,
        });

        //Reload upon - changed search-Query to view different articles
        if(!_.isEqual(oldQS, newQS)){
            this._makeFetchArticleCall(newQS, 0); //On-Change of Search - pageOffset is - 0
        }
    }

    _makeFetchArticleCall(queryString, nextPage){
        this.props.fetchArticle({key:queryString, pageOffset:nextPage, isSearch:true});
    }

    _handlePageSelection(eventKey){
        const qs = _.get(this.props, 'match.params.queryString');
        let pageOffset = 0;

        this.setState({
            activePage: eventKey
        });

        pageOffset = eventKey - 1 ;
        this._makeFetchArticleCall(qs, pageOffset); //On-Change of Search - pageOffset is - 0

    }

    render() {
        const {backName, currentName} = this.props;
        const {articles, totalArticles} = this.state;
        const totalPages = Math.ceil(totalArticles / AppConstants.PAGE_SIZE);

        return (
            <div>
                <Breadcumb backName={backName} currentName={currentName} />
                {
                    articles.map((article, index) =>
                        <ArticleRow key={index} article={article} />
                    )
                }

                <div style={{textAlign: 'center', marginBottom: '30px'}}>
                    <Pagination prev next first last ellipsis boundaryLinks
                                maxButtons={5} items={totalPages}
                                activePage={this.state.activePage}
                                onSelect={this._handlePageSelection}
                    />
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleSearchView);

