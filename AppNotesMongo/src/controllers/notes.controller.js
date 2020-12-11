const router = require("../routes/notes.routes");

const notesCtrl = {};

notesCtrl.renderNoteForm = (req,res) =>{
    res.send('note add');
}
notesCtrl.createNewNote = (req,res) =>{
    res.send(' new note');
}

notesCtrl.renderNotes = (req,res) =>{
    res.send('render note');
}

notesCtrl.renderEditForm = (req,res) =>{
    res.send('render edit form');
}

notesCtrl.updateNote = (req,res) =>{
    res.send('update note');
}

module.exports=notesCtrl;