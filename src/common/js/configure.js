/*
 * pwix:image-includer/src/common/js/configure.js
 */

import _ from 'lodash';

import { ReactiveVar } from 'meteor/reactive-var';

let _conf = {};

ImageIncluder._conf = new ReactiveVar( _conf );

ImageIncluder._defaults = {
    verbosity: ImageIncluder.C.Verbose.CONFIGURE
};

/**
 * @summary Get/set the package configuration
 *  Should be called *in same terms* both by the client and the server.
 * @param {Object} o configuration options
 * @returns {Object} the package configuration
 */
ImageIncluder.configure = function( o ){
    if( o && _.isObject( o )){
        _conf = _.merge( ImageIncluder._defaults, _conf, o );
        ImageIncluder._conf.set( _conf );
        // be verbose if asked for
        if( _conf.verbosity & ImageIncluder.C.Verbose.CONFIGURE ){
            //console.log( 'pwix:image-includer configure() with', o, 'building', TenantsList._conf );
            console.log( 'pwix:image-includer configure() with', o );
        }
    }
    // also acts as a getter
    return ImageIncluder._conf.get();
}

_conf = _.merge( {}, ImageIncluder._defaults );
ImageIncluder._conf.set( _conf );
