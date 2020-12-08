/* codigo express */
const express = require('express');
const path = require('path');
//initializations
const app = express();

//settings  configuras las dependencias de express
app.set('port', process.env.PORT || 4000);
app.set('views',path.join(__dirname, 'views'));
//middlewares funcionies previas

//global variables


//routes

//static files



module.exports = app;