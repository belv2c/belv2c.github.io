// Prints to the console
console.log("All my blogs: "); 

// Creates a variable for blog-holder ID in HTML
var blogHolder = document.getElementById("blog-holder"); 

function buildDomString (allBlogs) {
	console.log("domstring");
	var domString = '';
	for (var i = 0; i < allBlogs.length; i++){
		var currentBlog = allBlogs[i];
	domString += `<div class="blog-card">`;
	domString +=	`<header class="blog-header">`;
	domString +=		`<h3 class="blog-title">${currentBlog.title}</h3>`;
	domString +=	`</header>`;
	domString +=	`<section>`;
	domString += 		`<p class="blog-content">${currentBlog.content}</p>`;	
	domString +=	`</section>`;
	domString += 	`<footer>`;
	domString += 		`<h5 class="blog-date">${currentBlog.date}</h5`;
	domString +=	`<footer>`;
	domString +=  `</div>`;
	}
	
	blogHolder.innerHTML += domString;
}


//XHR

function executeThisCodeAfterFileLoads(){
	var data = JSON.parse(this.responseText).allBlogs;
	console.log("Blogs", data);
	buildDomString(data);
}

function executeThisCodeIfFileErrors(){
	console.log("uh no");
}


var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeThisCodeAfterFileLoads);
myRequest.addEventListener("error", executeThisCodeIfFileErrors);
myRequest.open("GET", "blog-posts.json");
myRequest.send();








