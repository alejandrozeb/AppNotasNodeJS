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

*/