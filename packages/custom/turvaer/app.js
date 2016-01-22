'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Turvaer = new Module('turvaer');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Turvaer.register(function(app, auth, database, system) {

  //We enable routing. By default the Package Object is passed to the routes
  Turvaer.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Turvaer.menus.add({
    title: 'Meny',
    link: 'meny',
    roles: ['authenticated', 'anonymous'],
    menu: 'mymain'
  });


  // Set views path, template engine and default layout
  app.set('views', __dirname + '/server/views');

  Turvaer.aggregateAsset('css', 'turvaer.css');
  Turvaer.angularDependencies(['mean.system'])


  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Turvaer.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Turvaer.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Turvaer.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Turvaer;
});
