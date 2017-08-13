import React, { Component } from 'react';
import {HashRouter, Route, Switch, Link} from 'react-router-dom';

import './App.css';
import AppHeader from './components/presentational/app-header.js';
import SectionBar from './components/container/section-bar.js';
import ArticleListView from './components/container/article-list-view.js';
import ArticleDetailView from './components/presentational/article-detail-view.js';
import ArticleSearchView from './components/container/article-search-view.js';
import Constants from './constants/translation/en.js';


const mapStateToProps = (state) => ({
    articles: state.articlesWrapper.articles,
})

class App extends Component {

    constructor(props){
        super(props);
        this.state= {
            category:'home'
        };
        this._handleSectionChange = this._handleSectionChange.bind(this);
    }

    _handleSectionChange(value) {
        this.setState({
            category:value
        });
    }

    render() {
        const {category} = this.state;
        return (
            <HashRouter hashType="noslash">
                <div className="App">
                    <AppHeader />
                    <div className="container">
                        <SectionBar reflectChange={this._handleSectionChange} />
                        <Switch>
                          <Route path="/" exact render={props =>
                              <div>
                                  <h1 style={{marginLeft:'10px'}}> {Constants.sectionTitle} </h1>
                                  <ArticleListView category={category} />
                              </div>
                          } />
                          <Route path="/article/:id" render={props =>
                              <div>
                                  <ArticleDetailView backName={category} currentName="Article" {...props} />
                              </div>
                          } />
                          <Route path="/search/q/:queryString" exact render={props =>
                              <div>
                                  <ArticleSearchView backName={category} currentName="Search" {...props}/>
                              </div>
                          } />
                        </Switch>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default App;
