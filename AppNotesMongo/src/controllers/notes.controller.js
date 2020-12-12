const { request } = require("express");
const router = require("../routes/notes.routes");


const notesCtrl = {};
const Note =  require('../models/Note');

notesCtrl.renderNoteForm = (req,res) =>{
    res.render('notes/newnote');
}
notesCtrl.createNewNote = (req,res) =>{
    const {title,description} = req.body;
    new Note(title,description);    
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
notesCtrl.deleteNote = (req,res) =>{
    res.send('deleting note');
}

module.exports=notesCtrl;