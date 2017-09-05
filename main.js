// Prints to the console
console.log("All my blogs: "); 

// Creates a variable for blog-holder ID in HTML
let blogHolder = document.getElementById("blog-holder"); 

//XHR

function executeThisCodeAfterFileLoads(){
	const data = JSON.parse(this.responseText).allBlogs;
	buildDomString(data);
}

const executeThisCodeIfFileErrors = () => {
	console.log("uh no");
}

let myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeThisCodeAfterFileLoads);
myRequest.addEventListener("error", executeThisCodeIfFileErrors);
myRequest.open("GET", "blog-posts.json");
myRequest.send();
//Output container
let counter = 0;
let outputEl = document.getElementById("jumbo-content");
/*for (counter; counter < 5; counter++){*/

const buildDomString = (allBlogs) => {
	console.log("domstring");
	let domString = '';
	for (let i = 0; i < allBlogs.length; i++){
		let currentBlog = allBlogs[i];
	domString += `<div class="blogz col-md-3 col-md-offset-1">`;
	domString +=		`<h3 class="blog-title child">${currentBlog.title}</h3>`;
	domString += 		`<h5 class="blog-date child">${currentBlog.date}</h5>`;
	domString += 		`<p class="blog-content child">${currentBlog.content}</p>`;	
	domString +=  `</div>`;
	}
	blogHolder.innerHTML += domString;
  }


//Storing the blog card div into containerEl
const containerEl = document.getElementsByClassName("blog col-md-3 col-md-offset-1");

//Creates a global variable
let selectedCard;

//Adding click event to blogHolder element and targeting elements in the blogHolder div
blogHolder.addEventListener("click", (event) => {
	if (event.target.classList.contains("blogz")){
		selectedCard = event.target;
	} else if (event.target.parentNode.classList.contains("blogz")){
		selectedCard = event.target.parentNode;
	}

	newCard(); //calling newCard function
})

//
const newCard = () => {
	outputEl.innerHTML = selectedCard.innerHTML;
}











