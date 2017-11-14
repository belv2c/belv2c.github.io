(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

const firebaseApi = require('./firebaseApi');
const data = require('./dom');

const apiKeys = () => {
	return new Promise((resolve, reject) => {
		$.ajax('./db/apiKeys.json').done((data) => {
			resolve(data.apiKeys);
		}).fail((error) => {
			reject(error);
		});
	});
};

const retrieveKeys = () => {
	apiKeys().then((results) => {
		firebaseApi.setKey(results.firebaseKeys);
		firebase.initializeApp(results.firebaseKeys);
		console.log(results);
	}).catch((error) => {
		console.log("error in retrieveKeys", error);
	});
};

module.exports = { retrieveKeys };
},{"./dom":2,"./firebaseApi":3}],2:[function(require,module,exports){
"use strict";

/*let outputEl = document.getElementById("jumbo-content");*/


const buildDomString = (blogs) => {
	let domString = "";

	for(let i = 0; i < blogs.length; i++) {
	domString += `<div class="blogz col-xs-6 col-xs-offset-3">`;
	domString +=		`<h3 class="blog-title child">${blogs[i].title}</h3>`;
	domString += 		`<h5 class="blog-date child">${blogs[i].date}</h5>`;
	domString += 		`<p class="blog-content child">${blogs[i].content}</p>`;	
	domString +=  `</div>`;

  }
  printToDom(domString);
  clickEvent();
 };

 const printToDom = (strang) => {

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
},{"./dom":2}],4:[function(require,module,exports){
"use strict";

const data = require('./dom.js');
const apiKeys = require('./apiKeys');

$(document).ready(function(){ 
	apiKeys.retrieveKeys();

});






},{"./apiKeys":1,"./dom.js":2}]},{},[4]);
