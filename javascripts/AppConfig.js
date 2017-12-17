"use strict";

//runs one time per application after the app config
app.run(function(FIREBASE_CONFIG){
	firebase.initializeApp(FIREBASE_CONFIG);
});


app.config(function($routeProvider){
	$routeProvider
		.when("/about", {
			// path to html file and path to javascript file
			templateUrl: 'partials/about.html',
			controller: 'AboutCtrl'
		})
		.when("/projects", {
			// path to html file and path to javascript file
			templateUrl: 'partials/projects.html',
			controller: 'ProjectCtrl'
		})
		.when("/blog", {
			// path to html file and path to javascript file
			templateUrl: 'partials/blog.html',
			controller: 'BlogCtrl'
		});
});