"use strict";

app.service("BlogService", function($http, $rootScope, $q, FIREBASE_CONFIG) {
	
	const createBlogObject = (blogs) => {
		 return {
			"date": blogs.date,
			"title": blogs.title,
			"content": blogs.content,
			"id": blogs.id
		};
	};

	const getAllTheBlogs = (userUid) => {
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



return {getAllTheBlogs, createBlogObject};
});
