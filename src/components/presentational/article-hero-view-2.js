import React, { Component } from 'react';
import ByLinePublishTimeSection from './byline-publish-date-section.js';
import {Link} from 'react-router-dom';

class ArticleHero extends Component {

    render() {
        const {article} = this.props;
        const thumbnail = article.findImageBySubType('thumbnail');

        return (
            <Link to={{
                pathname: '/article/'+ article._id,
                query: {article}
            }}>
                <div className="hero-contianer-2 article-container">
                    <h4 className="hero-2-title-n2"> {article.title} </h4>
                    <ByLinePublishTimeSection by={article.byline} publishdate={article.publishDate} />
                </div>
            </Link>
        );
    }
}

export default ArticleHero;
