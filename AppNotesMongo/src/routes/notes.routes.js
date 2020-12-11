const {Router} = require('express');
const router = Router()
const {renderNoteForm} = require('../controllers/notes.controller');

router.get('/notes/add',renderNoteForm);//mostraremos un formulario
module.exports= router;