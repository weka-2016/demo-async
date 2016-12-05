var request = require('superagent')



console.log('synchronous code starting to be run')




console.log('asynchronous code starting to be run')

request.get('www.kiwibank.co.nz', printTheResult)

console.log('synchronous code ending')




// error-first pattern

function printTheResult (err, data) {
  if (err) {
    return console.log(err, data)
  }

  // console.log("Here is that page you asked for", err, data)
  console.log("results are back from", data.redirects)
}

