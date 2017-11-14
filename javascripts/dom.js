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