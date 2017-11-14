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
			if (blogs != null) {
				Object.keys(blogs).forEach((key) => {
					blogs[key].id = key;
					allBlogs.push(blogs[key]);
					console.log(allBlogs);
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
/*		showResults(results);*/
console.log(results);
	}).catch((error) => {
		console.log("error in getAllBlogs", error);
	});
};

/*
const showResults = (blogs) => {

};*/

const getBlogs = () => {
	console.log(blogArray);
};

module.exports = {findAllBlogs, getBlogList, setKey};