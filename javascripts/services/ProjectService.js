"use strict";

app.service("ProjectService", function($http, $q, FIREBASE_CONFIG) {
	
	const getAllTheProjects = () => {
		let projectsArray = [];
		return $q ((resolve, reject) => {
			$http.get(`${FIREBASE_CONFIG.databaseURL}/projects.json`).then((results) => {
				let projects = results.data;
				if (projects != null) {
				Object.keys(projects).forEach((key) => {
					projects[key].id = key;
					projectsArray.push(projects[key]);
			   	  });
			    }
					resolve(projectsArray);
			}).catch((err) => {
				console.log("error in getAllTheProjects", err);
			});
		});
	};


return {getAllTheProjects};
});
