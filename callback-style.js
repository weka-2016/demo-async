var fs = require('fs')  // fileSystem
var path = require('path')

var filePath = path.join(__dirname, 'package.json')


fs.readFile(filePath, (err, data) => {
  if (err) throw err

  console.log(data.toString())
})


/////////////////////////////


fs.readFile(filePath, function (err, data) {
  if (err) { 
    throw err
  }

  console.log(data.toString())
})


// /////////////////////////////

fs.readFile(filePath, processResults)
  
function processResults (err, data) {
  if (err) throw err

  console.log(data.toString())
}

