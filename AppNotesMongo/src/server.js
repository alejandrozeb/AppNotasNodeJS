/* codigo express */
const express = require('express');
//importando el motor de plantilla
const exphbs = require('express-handlebars');
const path = require('path');
const router = require('./routes/index.routes');
const methodOverride = require('method-override');
//initializations
const app = express();

//settings  configuras las dependencias de express
app.set('port', process.env.PORT || 4000);
app.set('views',path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname: '.hbs'
}));//importando el motor de plantilla
app.set('view engine', '.hbs');//definimos  a handlebars como nuestro motor de plantilla
//middlewares funcionies previas
app.use(express.urlencoded({extended: false})); //todos llso datos de formularios llegan en formato json
app.use(methodOverride('_method'));

//global variables


//routes
app.use(require('./routes/index.routes'));    // desde ahora usaremos un archivo diferente para definir las rutas
app.use(require('./routes/notes.routes'));//reconoce las rutas de notes 
/* app.get('/', (req,res)=>{
    res.render('index');
    //res.send('hello world');
}); */
//static files
app.use(express.static(path.join(__dirname, 'public')));    //con static indicamos que son archivos publicos


module.exports = app;