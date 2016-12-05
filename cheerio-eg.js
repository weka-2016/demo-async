var cheerio = require('cheerio')


request.get('kiwibank.co.nz', processPage)


function processPage (err, data) {
  var html = data.body. ????
  var $ = cheerio.load(html)
   
  // parsing

  var links = $('a').attr('href')
  console.log(links)
}


