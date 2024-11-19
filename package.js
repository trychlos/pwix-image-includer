Package.describe({
    name: 'pwix:image-includer',
    version: '1.0.0',
    summary: 'A Blaze component which provides a dynamic image includer',
    git: 'https://github.com/trychlos/pwix-image-includer',
    documentation: 'README.md'
});

Package.onUse( function( api ){
    configure( api );
    api.export([
        'ImageIncluder'
    ]);
    api.mainModule( 'src/client/js/index.js', 'client' );
    api.mainModule( 'src/server/js/index.js', 'server' );
});

Package.onTest( function( api ){
    configure( api );
    api.use( 'tinytest' );
    api.use( 'pwix:image-includer' );
    api.mainModule( 'test/js/index.js' );
});

function configure( api ){
    api.versionsFrom([ '2.9.0', '3.0-rc.0' ]);
    api.use( 'blaze-html-templates@2.0.0 || 3.0.0-alpha300.0', 'client' );
    api.use( 'ecmascript' );
    api.use( 'less@4.0.0', 'client' );
    api.use( 'pwix:i18n@1.5.0' );
    api.use( 'pwix:ui-bootstrap5@2.0.0', 'client' );
    api.use( 'pwix:ui-fontawesome6@1.0.0', 'client' );
    api.use( 'reactive-var' );
    api.use( 'tmeasday:check-npm-versions@1.0.2 || 2.0.0-beta.0', 'server' );
    api.addFiles( 'src/client/components/ImageIncluder/ImageIncluder.js', 'client' );
}
