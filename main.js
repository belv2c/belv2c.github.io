// Prints to the console
console.log("All my blogs: "); 

// Creates a variable for blog-holder ID in HTML
var blogHolder = document.getElementById("blog-holder"); 

//Output container
var counter = 0;
var outputEl = document.getElementById("output-element");
for (counter; counter < 5; counter++){

function buildDomString (allBlogs) {
	console.log("domstring");
	var domString = '';
	for (var i = 0; i < allBlogs.length; i++){
		var currentBlog = allBlogs[i];
	domString += `<div class="blogz col-md-3 col-md-offset-1">`;
	domString +=		`<h3 class="blog-title child">${currentBlog.title}</h3>`;
	domString += 		`<h5 class="blog-date child">${currentBlog.date}</h5`;
	domString += 		`<p class="blog-content child">${currentBlog.content}</p>`;	
	domString +=  `</div>`;
	}
	blogHolder.innerHTML += domString;
  }
}

//Storing the blog card div into containerEl
var containerEl = document.getElementsByClassName("blog col-md-3 col-md-offset-1");

//Creates a global gariable
var selectedCard;

blogHolder.addEventListener("click", function(event){
	if (event.target.parentNode.classList.contains("blogz")){
		let selectedCard = event.target.parentNode.innerHTML;
		console.log("HI");
	}
	newCard(selectedCard);
})

function newCard(strang) {
	/*var printSelectedBlog = document.getElementById("output-element");*/
	/*outputEl.innerHTML = `<p>${blogHolder.value}</p>`;*/
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








