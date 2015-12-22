//parsing nested element HTML string
var cheerio = require('cheerio'),
    htmlString  = "<div id='divA'><div id='divB'><h1 class='message'>Hello Sandeep</h1>></div></div>",
    $ = cheerio.load(htmlString),
    textContent = $('h1.message').text();
console.log("textContent: ",textContent);