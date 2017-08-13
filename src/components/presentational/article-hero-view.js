import React, { Component } from 'react';
import ByLinePublishTimeSection from './byline-publish-date-section.js';
import _ from 'lodash';
import {Link} from 'react-router-dom';
import AppConstants from '../../constants/app-constants.js';


class ArticleHero extends Component {

    render() {
        const {article} = this.props;
        const thumbnail = article.findImageBySubType('thumbnail');
        const thumbnailURL = !_.isEmpty(thumbnail) ? thumbnail.url : AppConstants.THUMBNAILPLACEHOLDERURL;

        return (
            <Link to={{
                pathname: '/article/'+ article._id,
                query: {article}
            }}>
                <div className="hero-contianer article-container" >
                    <div className="hero-title-section">
                        <div className="media">
                            <div className="media-body">
                                <h3 className="media-heading title-n1 hero-title-n1">{article.title}</h3>
                                <ByLinePublishTimeSection by={article.byline} publishdate={article.publishDate}/>
                            </div>
                            <div className="media-right">
                                <img className="media-object thumbnail-img" src={thumbnailURL} alt="..." />
                            </div>
                        </div>
                    </div>
                    <div className="hero-body-section clip-text">
                        {article.body}
                    </div>
                </div>
            </Link>
        );
    }
}

export default ArticleHero;



