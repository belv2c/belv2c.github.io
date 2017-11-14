"use strict";

const events = require('./events');
const blogs = require('./blog.js');
const dom = require('./dom.js');
const apiKeys = require('./apiKeys');

$(document).ready(function(){ 
	/*events.init();*/
	apiKeys.retrieveKeys();

});





