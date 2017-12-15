"use strict";

app.controller("BlogCtrl", function($scope, BlogService) {

	const getFbBlogs = () => {
		BlogService.getAllTheBlogs().then((results) => {
			$scope.blogs = results;
		}).catch((err) => {
			console.log("error in getFbBlogs", err);
		});
	};
	getFbBlogs();
	
});