const { request } = require("express");
const router = require("../routes/notes.routes");


const notesCtrl = {};
const Note =  require('../models/Note');

notesCtrl.renderNoteForm = (req,res) =>{
    res.render('notes/newnote');
}
notesCtrl.createNewNote = async (req,res) =>{
    const {title,description} = req.body;
    const newNote= new Note({title,description});
    await newNote.save();    
    res.send(' new note');
}

notesCtrl.renderNotes = async (req,res) =>{
    const notes = await  Note.find();
    //console.log(notes);
    res.render('notes/allnotes',{notes});//pasamos la info a la vista
}

notesCtrl.renderEditForm = (req,res) =>{
    res.send('render edit form');
}

notesCtrl.updateNote = (req,res) =>{
    res.send('update note');
}
notesCtrl.deleteNote = async (req,res) =>{
    await Note.findByIdAndDelete(req.params.id);
    res.redirect('/notes');

}

module.exports=notesCtrl;