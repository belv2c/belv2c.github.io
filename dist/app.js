(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

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

module.exports = {getBlogEntries};
},{"./dom":2}],2:[function(require,module,exports){
"use strict";

/*let outputEl = document.getElementById("jumbo-content");*/


const buildDomString = (allBlogs) => {
	let domString = "";

	for(let i = 0; i < allBlogs.length; i++) {
		console.log("HI");
		/*let currentBlog = allBlogs[i];*/
	domString += `<div class="blogz col-xs-6 col-xs-offset-3">`;
	domString +=		`<h3 class="blog-title child">${allBlogs[i].title}</h3>`;
	domString += 		`<h5 class="blog-date child">${allBlogs[i].date}</h5>`;
	domString += 		`<p class="blog-content child">${allBlogs[i].content}</p>`;	
	domString +=  `</div>`;

  }
  printToDom(domString);
  clickEvent();
 };

 const printToDom = (strang) => {
 	console.log("hi");
 	$("#blog-holder").html(strang);
 };

 const clickEvent = () => {
 	$('body').on("click", ".blogz", (event) => {
 		let selectedBlog = event.currentTarget.innerHTML;
 		$("#jumbotron").html(selectedBlog);
 	});
 };



module.exports = {buildDomString};
},{}],3:[function(require,module,exports){
"use strict";

const blogs = require('./blog.js');
const dom = require('./dom.js');






},{"./blog.js":1,"./dom.js":2}]},{},[3]);
