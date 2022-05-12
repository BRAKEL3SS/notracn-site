const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cors = require('cors')

require('dotenv').config()
require('./config/database')


const app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
//Configure both serve-favicon and static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))
app.use(express.static(path.join(__dirname, 'build')))

// Middleware to verify token and assign user object of payload to req.user
// Be sure to mount before routes
app.use(require('./config/checkToken'))

//Put API routes here, before the "catch all"
app.use('/send', require('./routes/mail/mail.js'))
app.use('/api/users', require('./routes/api/users'))
//THe followign catch all route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

// Configure to use port 3001 instead of 3000 to avoid colision
const port = process.env.PORT || 3001

app.listen(port, function () {
    console.log(`Express app running on port ${port}`)
})
