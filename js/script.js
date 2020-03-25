/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
	// Check the "Project Resources" section of the project instructions
	// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

let quotes = [];
let colours = [];
quotes.push({
	quote: "Be yourself; everyone else is already taken.",
	source: "The internet",
	citation: "Oscar Wilde",
	year: 2020,
	tag: "inspirational"
}, 
{
	quote: "Believe and act as if it were impossible to fail.",
	source: "Pakwired.com",
	tag: "non-humor"
}, {
	quote: "The difference between ordinary and extraordinary is that little extra.",
	citation: "Unknown", 
	source: "The internet",
}, {
	quote: "The only thing worse than being blind is having sight but no vision.",
	source: "The internet",
	rating: "5/10"
}, {
	quote: "I've ran out of quotes",
	source: "The internet",
	rating: "0/10",
	tag: "humour"
});

colours.push({
	handle: "red",
	hex: "#E82626"
},{
	handle: "blue",
	hex: "#2646E8"
},{
	handle: "black",
	hex: "#000000"
},{
	handle: "pink",
	hex: "#EE4DF6"
})

/**
 * Randomly grabs a quote from the array 
 * @returns {object}
 */

function getRandomQuote() {
	var randomNumber = quotes[Math.floor(Math.random()*quotes.length)]
	return randomNumber;
}


/**
 * Automatically changes the colour of the background
 * @returns {boolean}
 */

function changeColour() {
	var randomColour = colours[Math.floor(Math.random()*colours.length)]
	let colourHandle = randomColour.handle
	let hexColour = randomColour.hex

	document.body.style.background = hexColour;
}

/**
 * Automatically prints the a random quote onto the page
 * @returns {string}
 */

function printQuote() {
	var quoteData = getRandomQuote();
	let quote = quoteData.quote;
	let source = quoteData.source; 
	let citation = quoteData.citation; 
	let tag = quoteData.tag; 
	let rating = quoteData.rating; 
	let year = quoteData.year; 

	htmlText = `<p class="quote">${quote}</p><p class="source">${source}`
	if (citation !== undefined) {
		htmlText += `<span class="citation">${citation}</span>`
	}
	
	if (tag !== undefined) {
		htmlText += `<span class="citation">${tag}</span>`
	}
	
	if (rating !== undefined) {
		htmlText += `<span class="citation">${rating}</span>`
	}
	
	if (year !== undefined) {
		htmlText += `<span class="year">${year}</span>`
	}
	
	htmlText +=`</p>`


	document.getElementById('quote-box').innerHTML = htmlText; 
	return htmlText
}

function updatePage() {
	changeColour();
	printQuote();
}

setInterval(updatePage, 5000)

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", updatePage, false);