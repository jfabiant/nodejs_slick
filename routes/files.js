var express = require ('express')
var router = express.Router()
var fs = require('fs')
var path = require('path')
var util = require('util')

function filterDotFiles (files) {
  return files.filter(f => f.match(/^[^.].*$/))
}

router.get('/', function (req, res, next) {
    const testFolder = path.join(__dirname, '../public/uploads')
    var readdir = util.promisify(fs.readdir)
  
    return readdir(testFolder)
      .then(filterDotFiles)
      .then(files => {
        res.render('files.ejs', {files})
      })
      .catch(next)
  })

module.exports = router


























