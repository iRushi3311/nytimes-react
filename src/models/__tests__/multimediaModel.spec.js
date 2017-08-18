import Multimedia from '../multimedia.js';
import AppConstants from '../../constants/app-constants.js';

describe('Model Test --- Multimedia ---', () => {

    it(' Test Multimedia model (new) ', () => {
        //setup
        const src = {
            type: 'type-1',
            subtype: 'subtype-X',
            url: '/img_X',
            height: '75px',
            width: '75px'
        };

        //execute
        const actualMultiMedia = new Multimedia(src);

        //verify
        expect(actualMultiMedia.type).toEqual(src.type);
        expect(actualMultiMedia.subtype).toEqual(src.subtype);
        expect(actualMultiMedia.url).toEqual( AppConstants.MULTIMEDIA_BASE_URL + src.url);
        expect(actualMultiMedia.height).toEqual(src.height);
        expect(actualMultiMedia.width).toEqual(src.width);
    });

    it(' Test Multimedia model ', () => {
        //setup
        const src = {
            type: 'type-1',
            subtype: 'subtype-X',
            url: '/img_X',
            height: '75px',
            width: '75px'
        };

        //execute
        const actualMultiMedia = Multimedia(src);

        //verify
        expect(actualMultiMedia.type).toEqual(src.type);
        expect(actualMultiMedia.subtype).toEqual(src.subtype);
        expect(actualMultiMedia.url).toEqual( AppConstants.MULTIMEDIA_BASE_URL + src.url);
        expect(actualMultiMedia.height).toEqual(src.height);
        expect(actualMultiMedia.width).toEqual(src.width);
    });

});
