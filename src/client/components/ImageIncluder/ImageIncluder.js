/*
 * pwix:image-includer/src/client/components/ImageIncluder/ImageIncluder.js
 *
 * Usage: see README
 */

import { pwixI18n } from 'meteor/pwix:i18n';
import { ReactiveVar } from 'meteor/reactive-var';

import './ImageIncluder.html';

Template.ImageIncluder.onCreated( function(){
    const self = this;

    self.APP = {
        img: new ReactiveVar( null ),
        exists: new ReactiveVar( false )
    };
});

Template.ImageIncluder.onRendered( function(){
    const self = this;

    // load the image from the url to see if it exists
    // https://stackoverflow.com/questions/14651348/checking-if-image-does-exists-using-javascript
    self.autorun(() => {
        const url = Template.currentData().imageUrl;
        if( url ){
            const img = new Image();
            img.addEventListener( 'load', () => self.APP.exists.set( true ));
            img.addEventListener( 'error', () => self.APP.exists.set( false ));
            img.src = url;
            self.APP.img.set( img );
        }
    });

    // set the image size
    self.autorun(() => {
        const width = Template.currentData().imageWidth || '10em';
        self.$( '.includer-picture' ).css({ width: width });
    });
    self.autorun(() => {
        const height = Template.currentData().imageHeight || '11.5em';
        self.$( '.includer-picture' ).css({ height: height });
    });
});

Template.ImageIncluder.helpers({
    // the name of the default svg, defaulting to 'fa-user'
    haveDefaultIcon(){
        return this.defaultIcon || 'fa-user';
    },

    // whether we want have an input field for the image url
    haveInput(){
        return Template.currentData().withInput === true;
    },

    // string translation
    i18n( arg ){
        return pwixI18n.label( I18N, arg.hash.key );
    },

    // the picture's URL
    pictureUrl(){
        return this.imageUrl;
    },

    // show the picture ?
    picImgClass(){
        return Template.instance().APP.exists.get() ? 'ui-dblock' : 'ui-dnone';
    },

    // hide the svg if we have a picture (FontAwesome is not dynamic)
    picSvgClass(){
        return Template.instance().APP.exists.get() ? 'ui-dnone' : 'ui-dblock';
    }
});

Template.ImageIncluder.events({
    // input checks
    'click .js-go'( event, instance ){
        const url = instance.$( '.js-url' ).val();
        this.imageUrl.set( url );
        instance.$( '.c-image-includer' ).trigger( 'image-included', { url: url });
    },

    // ask for clear the panel
    'iz-clear-panel .c-image-includer'( event, instance ){
        instance.APP.form.get().clear();
    }
});
