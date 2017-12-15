"use strict";

app.controller("ProjectCtrl", function($scope, ProjectService) {

	const getFbProjects = () => {
		ProjectService.getAllTheProjects().then((results) => {
			$scope.projects = results;
		}).catch((err) => {
			console.log("error in getFbProjects", err);
		});
	};
	getFbProjects();
	
});