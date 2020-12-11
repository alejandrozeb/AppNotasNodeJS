const {Router} = require('express');
const router = Router()
const {renderNoteForm,createNewNote} = require('../controllers/notes.controller');
//new note
router.get('/notes/add',renderNoteForm);//mostraremos un formulario

router.post('/notes/add',createNewNote);//cuando se encie datos ni existira comflictos por que tienen diferente verbo(get,post)

//get all note


module.exports= router;