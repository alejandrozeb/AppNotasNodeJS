const {Router} = require('express');
const router = Router()
const { renderNoteForm,
        createNewNote,
        renderNotes,
        renderEditForm,
        updateNote,
        deleteNote
} = require('../controllers/notes.controller');
//new note
router.get('/notes/add',renderNoteForm);//mostraremos un formulario

router.post('/notes/new-note',createNewNote);//cuando se encie datos ni existira comflictos por que tienen diferente verbo(get,post)

//get all note
router.get('/notes',renderNotes);
//edit notes
router.get('/notes/edit/:id',renderEditForm);   //para mostrar el form
router.put('/notes/edit/:id',updateNote); //para actualizar el form

//delete notes
router.delete('/notes/delete/:id',deleteNote);

module.exports= router;