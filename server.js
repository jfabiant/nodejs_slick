var express = require ('express')
var app = express()
//path
var path = require('path')
//body-parser
var bodyParser = require('body-parser')
//routes
var index = require('./routes/index')
var files = require('./routes/files')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', index)
app.use('/files', files)

app.listen(9000, ()=>{
    console.log('Listen in port 9000')
})












