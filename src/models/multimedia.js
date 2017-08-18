import AppConstants from '../constants/app-constants.js';

const Multimedia = function (src) {

    if( !(this instanceof Multimedia)) {
        return new Multimedia(src);
    }

    this.type = src.type;
    this.subtype = src.subtype;
    this.url = AppConstants.MULTIMEDIA_BASE_URL + src.url;
    this.height = src.height;
    this.width = src.width;

    return this;

};

export default Multimedia;