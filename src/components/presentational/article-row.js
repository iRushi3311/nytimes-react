import React, { Component } from 'react';
import ByLinePublishTimeSection from './byline-publish-date-section.js';
import _ from 'lodash';
import {Link} from 'react-router-dom';
import AppConstants from '../../constants/app-constants.js';

class ArticleRow extends Component {

    render() {
        const {article} = this.props;
        const thumbnail = article.findImageBySubType('thumbnail');
        const thumbnailURL = !_.isEmpty(thumbnail) ? thumbnail.url : AppConstants.THUMBNAILPLACEHOLDERURL;

        return (
            <Link to={{
                pathname: '/article/'+ article._id,
                query: {article}
            }}>
            <div className={this.props.firstRow ? "article-container article-row article-row-first" : "article-container article-row " }>
                <div className="media">
                    <div className="media-left">
                        <img className="media-object thumbnail-img" src={thumbnailURL} alt="..." />
                    </div>
                    <div className="media-body">
                        <h3 className="media-heading title-n1">{article.title}</h3>
                        <p className="article-body">
                            {article.body}
                        </p>
                        <ByLinePublishTimeSection by={article.byline} publishdate={article.publishDate}/>
                    </div>
                </div>
            </div>
            </Link>
        );
    }
}

export default ArticleRow;

