var allBlogs = []; // Array variable for Blogs

var blog1 = {
	title: "Blog One",
	content: "Sleeper shark marlin hussar Shingle Fish snipe eel spiny dogfish shiner driftfish emperor angelfish yellow perch bonefish Bitterling koi scissor-tail rasbora! Yellowfin croaker blue whiting poacher boxfish lumpsucker elver kuhli loach pupfish cownose ray long-finned char greenling thresher shark. Loach goby sarcastic fringehead desert pupfish: snubnose eel round whitefish angler flagblenny Black tetra sixgill ray Black swallower. Tube-snout New Zealand smelt golden loach common tunny morwong; longfin escolar.",
	date: "July 24, 2017",
};

var blog2 = {
	title: "Blog Two",
	content: "Sleeper shark marlin hussar Shingle Fish snipe eel spiny dogfish shiner driftfish emperor angelfish yellow perch bonefish Bitterling koi scissor-tail rasbora! Yellowfin croaker blue whiting poacher boxfish lumpsucker elver kuhli loach pupfish cownose ray long-finned char greenling thresher shark. Loach goby sarcastic fringehead desert pupfish: snubnose eel round whitefish angler flagblenny Black tetra sixgill ray Black swallower. Tube-snout New Zealand smelt golden loach common tunny morwong; longfin escolar.",
	date: "July 24, 2017",
};

var blog3 = {
	title: "Blog Three",
	content: "Sleeper shark marlin hussar Shingle Fish snipe eel spiny dogfish shiner driftfish emperor angelfish yellow perch bonefish Bitterling koi scissor-tail rasbora! Yellowfin croaker blue whiting poacher boxfish lumpsucker elver kuhli loach pupfish cownose ray long-finned char greenling thresher shark. Loach goby sarcastic fringehead desert pupfish: snubnose eel round whitefish angler flagblenny Black tetra sixgill ray Black swallower. Tube-snout New Zealand smelt golden loach common tunny morwong; longfin escolar",
	date: "July 24, 2017",
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


function printBlogArrayToDom(blogArray) {
	for (var i = 0; i < blogArray.length; i++) {

		var currentBlog = blogArray[i];
		var blogDomString = buildDomString(currentBlog);
		blogHolder.innerHTML += blogDomString;
	}
}

printBlogArrayToDom(allBlogs);













