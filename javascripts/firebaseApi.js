"use strict";

const dom = require('./dom');
let blogArray = [];
let firebaseKey = '';
let userUid = '';

const setKey = (key) => {
	firebaseKey = key;
	findAllBlogs();
};

const getBlogList = () => {
	let allBlogs = [];
	return new Promise((resolve, reject) => {
		$.ajax(`${firebaseKey.databaseURL}/blogs.json`).then((blogs) => {
			console.log("dese", blogs);
			if (blogs != null) {
				Object.keys(blogs).forEach((key) => {
					blogs[key].id = key;
					allBlogs.push(blogs[key]);
				});
			}
			resolve(allBlogs);
		}).catch((error) => {
			reject(error);
		});
	});
};

const findAllBlogs = () => {
	getBlogList().then((results) => {
		blogArray = results;
		console.log("DEM", results);
	}).catch((error) => {
		console.log("error in getAllBlogs", error);
	});
};

const getBlogs = () => {
	return blogArray;
};




module.exports = {findAllBlogs, getBlogs, setKey};