// Array for Blog entries
var allBlogs = []; 

var blog1 = {
	title: "What I learned 7.19.17 - 7.24.17",
	content: "Class on July 24th started out with a lot of JavaScript review from our Treehouse exercises. Lauren went over numbers, strings, objects and booleans. We also discussed uses for and situations in which we would want to use statements vs. compound statements, increments or decrements and Object Property Access such as console.log(). As a class we dove deeper into literals (values that are included directly in the source code). For example, string literals are surrounded by double quotes or single quotes based on personal stylistic preferences. Additionally, we reviewed number and boolean literals that are presented as is (42, true, etc.). We also discussed arrays which are objects that hold any type of values in numerically indexed positions. The concept of arrays starting at index 0 took me some time to fully grasp. After going over the different array syntaxes and their return values (shift, unshift, reverse, sort, slice and splice) I was feeling confident in my overall understanding of JavaScript - until we started For Loops. Combining the concepts of Arrays and For Loops was my first big hurdle in JavaScript. After a lot of in class practice and some group member hangs - it finally came together. ",
	date: "July 24, 2017",
};

var blog2 = {
	title: "What I learned 7.24.17 - 7.29.17",
	content: "After spending a lot of time working on core JavaScript concepts, we moved on to learning more terminal commands for Github. Since learning these new commands I am able to be more efficient when using the terminal. A few of the new commands we learned were git reset --hard, git reset, git rm --cached, git branch -d (branch name), git branch -b (branch name) and git merge (branch name). Our next big challenge was working through merge conflicts in Github as a group. Git diff has been one of the most helpful commands I’ve learned in order to see what’s going on before I add files to Github. Discovering that if you type the file name after git diff you can display only the changes that you made to a specific file was life changing. Git reset —hard and git fetch were very helpful in my group project, but I’ll discuss that more in my next blog post!",
	date: "July 29, 2017",
};

var blog3 = {
	title: "What I learned 7.31.17 - 08.05.17",
	content: "During the first week of August, we mainly focused on a group project - which was to create a fictitious shop page while working through merge conflicts in Github. This was one of the more challenging group projects as we had to learn to make our code work together as a team. After we were assigned the project, we spent the remainder of our evening wire-framing and creating cards in Github Projects. After delegating our tasks to each team member, we finally hit a point where we felt comfortable enough to start coding our shop page called “FGBG” (For Guineas By Guineas). FGBG is a guinea pig attire company run by guinea pigs. The project itself was not very difficult. I had a pretty clear idea of what code I needed to write to get the job done. On Wednesday night when we started coding, I don’t think that any of us were able to write any actual code due to working through so many merge conflicts. This was the week that I had to start kicking myself for not checking out of my master branch before I started writing code. I’m a pro in merge conflicts now and Jessica created a sticker to put on our laptops as a quick reference to get through them. After we got the hang of working on projects as a group, the rest of the time we had to work on it went smoothly - we even finished our project a little early! Without the help of my group members, I wouldn’t have survived merge conflicts. Also, if you want to discover a weird subculture of the internet, Google “guinea pig attire”. ",
	date: "July 31, 2017",
};

var blog4 = {
	title: "Blog Four",
	content: "Sleeper shark marlin hussar Shingle Fish snipe eel spiny dogfish shiner driftfish emperor angelfish yellow perch bonefish Bitterling koi scissor-tail rasbora! Yellowfin croaker blue whiting poacher boxfish lumpsucker elver kuhli loach pupfish cownose ray long-finned char greenling thresher shark. Loach goby sarcastic fringehead desert pupfish: snubnose eel round whitefish angler flagblenny Black tetra sixgill ray Black swallower. Tube-snout New Zealand smelt golden loach common tunny morwong; longfin escolar.",
	date: "July 24, 2017",
};

var blog5 = {
	title: "Blog Five",
	content: "Sleeper shark marlin hussar Shingle Fish snipe eel spiny dogfish shiner driftfish emperor angelfish yellow perch bonefish Bitterling koi scissor-tail rasbora! Yellowfin croaker blue whiting poacher boxfish lumpsucker elver kuhli loach pupfish cownose ray long-finned char greenling thresher shark. Loach goby sarcastic fringehead desert pupfish: snubnose eel round whitefish angler flagblenny Black tetra sixgill ray Black swallower. Tube-snout New Zealand smelt golden loach common tunny morwong; longfin escolar.",
	date: "July 24, 2017",
};

allBlogs.push(blog1)
allBlogs.push(blog2)
allBlogs.push(blog3)
allBlogs.push(blog4)
allBlogs.push(blog5)

// Prints to the console
console.log("All my blogs: ", allBlogs); 

// Creates a variable for blog-holder ID in HTML
var blogHolder = document.getElementById("blog-holder"); 

// Function building domString
console.log("All my blogs: ", allBlogs); // Prints to the console

var blogHolder = document.getElementById("blog-holder"); // Creates a variable for blog-holder ID in HTML

for (var i = 0; i < allBlogs.length; i++) { // For Loop - initializes at 0, runs the length of allBlogs array, increments one at a time

	var currentBlog = allBlogs[i];
	var blogDomString = buildDomString(currentBlog)

	var domString = "";



		console.log("Dom String from for loop", domString);
		blogHolder.innerHTML += blogDomString;
	}

function buildDomString(blog) {
	var domString = "";

	domString += '<section class="blog">';
		domString +=	'<div class="title">';
		domString += 			'<h2>' + blog.title + '</h2>';
		domString +=		'</div>';
		domString += 	'<div class="blog-text">';
		domString += 		'<p>' + blog.content + '</p>';
		domString +=	'</div>';
		domString += 	'<div class="date">';
		domString +=	'<p>' + blog.date + '</p>';
		domString +=		'</div>';
		return domString;
}
// For Loop - initializes at 0, runs the length of allBlogs array, increments one at a time


function printBlogArrayToDom(blogArray) {
	for (var i = 0; i < blogArray.length; i++) {

		var currentBlog = blogArray[i];
		var blogDomString = buildDomString(currentBlog);
		blogHolder.innerHTML += blogDomString;
	}
}
//Prints out all blog entries to DOM

printBlogArrayToDom(allBlogs);













