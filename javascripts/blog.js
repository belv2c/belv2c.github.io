/*"use strict";

let dom = require('./dom');

let blogEntries = [];


$.get("../db/blog-posts.json").done((data) => {
	let blogEntries = data.allBlogs;
	dom.buildDomString(blogEntries);
	}).fail((error) => {
		console.log("error from blogs", error);
});


const getBlogEntries = () => {
	return blogEntries;
};

module.exports = {getBlogEntries};*/