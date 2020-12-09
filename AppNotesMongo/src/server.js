/* codigo express */
const express = require('express');
//importando el motor de plantilla
const exphbs = require('express-handlebars');
const path = require('path');
//initializations
const app = express();

//settings  configuras las dependencias de express
app.set('port', process.env.PORT || 4000);
app.set('views',path.join(__dirname, 'views'));
app.set();
//middlewares funcionies previas
app.use(express.urlencoded({extended: false})); //todos llso datos de formularios llegan en formato json

//global variables


//routes
app.get('/', (req,res)=>{
    res.send('hello world');
});
//static files
app.use(express.static(path.join(__dirname, 'public')));    //con static indicamos que son archivos publicos


module.exports = app;