import Multimedia from './multimedia.js';
import _ from 'lodash';

const Article = function (src) {
    let self = this;

    if( !(this instanceof Article)) {
        return new Article(src);
    }

    this._id = _.get(src, '_id');
    this.webUrl = _.get(src, 'web_url');
    this.title = _.get(src, 'headline.main', 'Title Not Available');
    this.body = _.get(src, 'snippet', 'Empty Body');
    this.byline = _.get(src, 'byline.original', 'N/A');
    this.publishDate = !_.isEmpty(_.get(src, 'pub_date', '')) ? new Date(_.get(src, 'pub_date')) : null;

    this.images = [];

    src.multimedia && src.multimedia.forEach(item => {
       let image = new Multimedia(item);
       self.images.push(image);
    });

    this.findImageBySubType = (subType) => {
        return _.find(this.images, {'subtype': subType});
    }

    return this;

};

export default Article;