const MultimediaBaseUrl = 'http://www.nytimes.com/';

const Multimedia = function (src) {

    if( !(this instanceof Multimedia)) {
        return new Multimedia(src);
    }

    this.type = src.type;
    this.subtype = src.subtype;
    this.url = MultimediaBaseUrl + src.url;
    this.height = src.height;
    this.width = src.width;

    return this;

};

export default Multimedia;