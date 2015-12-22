//parsing single element HTML string
var cheerio = require('cheerio'),
     htmlString  = "<h1>Welcome Developers</h1>",
     $ = cheerio.load(htmlString),
     textContent = $('h1').text();
 console.log("textContent: ",textContent);