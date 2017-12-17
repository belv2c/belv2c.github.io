"use strict";

app.service("BlogService", function($http, $q, FIREBASE_CONFIG) {
	
	const getAllTheBlogs = () => {
		let blogsArray = [];
		return $q ((resolve, reject) => {
			$http.get(`${FIREBASE_CONFIG.databaseURL}/blogs.json`).then((results) => {
				let blogs = results.data;
				if (blogs != null) {
				Object.keys(blogs).forEach((key) => {
					blogs[key].id = key;
					blogsArray.push(blogs[key]);
			   	  });
			    }
					resolve(blogsArray);
			}).catch((err) => {
				console.log("error in getAllTheBlogs", err);
			});
		});
	};


return {getAllTheBlogs};
});
