import React, { Component } from 'react';
import _ from 'lodash';

import AppConstants from '../../constants/app-constants.js';
import Breadcumb from './breadcrumb.js';
import ByLinePublishTimeSection from './byline-publish-date-section.js';

class ArticleDetailView extends Component {

    render() {
        const {backName, currentName, location} = this.props;
        const {query} = location;
        const {article} = query;
        const {title, body, byline, publishDate, webUrl} = article;
        const thumbnail = article.findImageBySubType('thumbnail');
        const thumbnailURL = !_.isEmpty(thumbnail) ? thumbnail.url : AppConstants.THUMBNAILPLACEHOLDERURL;

        debugger;

        return (
            <div>
                <Breadcumb backName={backName} currentName={currentName} />
                <h2>
                    {title}
                </h2>
                <ByLinePublishTimeSection by={byline} publishdate={publishDate}/>
                <div className="media margin-B20">
                    <div className="media-left">
                        <img className="media-object thumbnail-img" src={thumbnailURL} alt="..." />
                    </div>
                    <div className="media-body">
                        <p className="article-body">
                            {body}
                        </p>
                    </div>
                </div>

                <iframe src={webUrl}
                        className="margin-B20"
                        width='100%' height='700px'
                        style={{border:'2px solid #000000'}}>
                </iframe>

            </div>
        );
    }
}

export default ArticleDetailView;

