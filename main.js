// Prints to the console
console.log("All my blogs: "); 

// Creates a variable for blog-holder ID in HTML
var blogHolder = document.getElementById("blog-holder"); 

//Output container
var counter = 0;
var outputEl = document.getElementById("jumbo-content");
for (counter; counter < 5; counter++){

function buildDomString (allBlogs) {
	console.log("domstring");
	var domString = '';
	for (var i = 0; i < allBlogs.length; i++){
		var currentBlog = allBlogs[i];
	domString += `<div class="blogz col-md-3 col-md-offset-1">`;
	domString +=		`<h3 class="blog-title child">${currentBlog.title}</h3>`;
	domString += 		`<h5 class="blog-date child">${currentBlog.date}</h5>`;
	domString += 		`<p class="blog-content child">${currentBlog.content}</p>`;	
	domString +=  `</div>`;
	}
	blogHolder.innerHTML += domString;
  }
}

//Storing the blog card div into containerEl
var containerEl = document.getElementsByClassName("blog col-md-3 col-md-offset-1");

//Creates a global variable
var selectedCard;

//Adding click event to blogHolder element and targeting elements in the blogHolder div
blogHolder.addEventListener("click", function(event){
	if (event.target.classList.contains("blogz")){
		selectedCard = event.target;
	} else if (event.target.parentNode.classList.contains("blogz")){
		selectedCard = event.target.parentNode;
	}

	newCard(); //calling newCard function
})

//
function newCard() {
	outputEl.innerHTML = selectedCard.innerHTML;
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








