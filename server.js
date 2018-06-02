const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(express.static('./'))

app.use(bodyParser.urlencoded({
    extended: true
}));

require('./src/config/routes')(app)

app.listen(3000)