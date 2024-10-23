/*
 * pwix:image-includer/test/js/index.js
 */

// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by the package.
import { name as packageName } from "meteor/pwix:image-includer";

// Write your tests here!
// Here is an example.
Tinytest.add('ImageIncluder - example', function( test ){
  test.equal( packageName, "plus-button" );
});
