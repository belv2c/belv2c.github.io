(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

const firebaseApi = require('./firebaseApi');
const dom = require('./dom');

const apiKeys = () => {
	return new Promise((resolve, reject) => {
		$.ajax('./db/apiKeys.json').done((data) => {
			resolve(data.firebaseKeys);
		}).fail((error) => {
			reject(error);
		});
	});
};

const retrieveKeys = () => {
	apiKeys().then((results) => {
		firebaseApi.setKey(results);
		firebase.initializeApp(results);
	}).catch((error) => {
		console.log("error in retrieveKeys", error);
	});
};

module.exports = { retrieveKeys };
},{"./dom":3,"./firebaseApi":5}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
"use strict";

/*let outputEl = document.getElementById("jumbo-content");*/


const buildDomString = (allBlogs) => {
	let domString = "";

	for(let i = 0; i < allBlogs.length; i++) {
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

 	$("#blog-holder").html(strang);
 };

 const clickEvent = () => {
 	$('body').on("click", ".blogz", (event) => {
 		let selectedBlog = event.currentTarget.innerHTML;
 		$("#jumbotron").html(selectedBlog);
 	});
 };



module.exports = {buildDomString};
},{}],4:[function(require,module,exports){

},{}],5:[function(require,module,exports){
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
		console.log("error in findAllBlogs", error);
	});
};

/*
const showResults = (blogs) => {

};*/

const getBlogs = () => {
	console.log(blogArray);
};

module.exports = {findAllBlogs, getBlogList, setKey};
},{"./dom":3}],6:[function(require,module,exports){
"use strict";

const events = require('./events');
const blogs = require('./blog.js');
const dom = require('./dom.js');
const apiKeys = require('./apiKeys');

$(document).ready(function(){ 
	/*events.init();*/
	apiKeys.retrieveKeys();

});






},{"./apiKeys":1,"./blog.js":2,"./dom.js":3,"./events":4}]},{},[6]);
