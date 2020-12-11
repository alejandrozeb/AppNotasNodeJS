/* 
Usaremos NOdejs y mongodb de maneraLocal
MODULOS DE PRODUCCION
connect-flash guarda y muestra mensajes desde el navegador.
bcryptjs cifrado de texto.
express-handlebars crear vistas, hvs podemos crear html, express-session memoria del servidor
method-override enviar peticiones put o delete con solo js no podemos enviar put y no delete.
mongoose ORM DE mongoose. edfinir esquemas con los datos.
passport un modulo para autenticar al usuario. con bcryptjs ademas usar de terceros.
passport-local.

npm i  express-handlebars@3.1.0 express-session@1.17.0 bcryptjs@2.4.3 mongoose@5.8.11 express@4.17.1 connect-flash@0.1.1 passport@0.4.1 passport-local@1.0.0 method-override@3.0.0

librerias instaladas.


MODULOS DE DESARROLLO
dotenv variables de entorno
nodemon reinicia el servidor automaticamnte
handlebars solucion a express-handles
npm-check-update muestras actializaciones de los modulos
npm install nodemon@2.0.2 dotenv@8.2.0 npm-check-updates@4.0.1 -D

Creaando directorios-ç con powershell
mkdir config,controllers,helpers,models,public,routes,views

COMANDOS
"start": "node src/index.js",   //lo usamos en produccion se ejecuta como:
        npm start
"dev": "nodemon src/index.js"   //usamos nodemon para que en cada cambio se reinicie nuestro servidor se ejecuta como:
        npm run dev
cuando no ejecutamos el start npm necesita la palabra reservada run.
 en .env podemos subir tokens e apis o de algun servicio que quereamos consumir


 importando moongose
 Schema define que se guradra con el modelo
 model permite crear una clase para acceder a herramientas.
        ----------NOTAS--------------
    las funciones flecha mantienes sus limites
    las funciones nattivas con la palabra reservada function pudes usar el this de otro objeto.
        ---------------MOTORES DE PLANTILLA------------
    nos ayudan a usar html y separarlos en bloques de codigo que vamos a poder reutilizar podemos agregar bucles, if.
    express handlebars para nodejs
    
    handlebars usa layouts y partials
        layouts son una especie de plantilla que nos permite tener un footer un header separados
        partials son pedazos de codigo los cuales vamos a poder importar a otro html.

        configuracion de handlebars carpetas.
            layoutsDir: path.join(app.get('views'),'layouts'),  /con path join determina donde esta views y lo concatena como path a layouts sin imporatr el sistema operativo.
            partialsDir: path.join(app.get('views'),'partials')
        

            defaultLayout: 'main',      //definimos la vista por defecto
            extname: '.hbs'     //definios con que extension se va a definir    

            {{{body}}}
            del layouts se inserta el codigo.
    *------------------------ROUTES----------
    Se usan con las tareas, separamos las reglas de negocio para eso usamos las url.
    se usan metodos http. 
*/