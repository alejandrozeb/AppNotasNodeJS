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
    req.flash();    
    res.redirect('/notes');
}

notesCtrl.renderNotes = async (req,res) =>{
    const notes = await  Note.find();
    //console.log(notes);
    res.render('notes/allnotes',{notes});//pasamos la info a la vista
}

notesCtrl.renderEditForm = async (req,res) =>{
    const note= await Note.findById(req.params.id);
    res.render('notes/editnote', {note});
}

notesCtrl.updateNote = async (req,res) =>{
    const{title,description} = req.body;
    await Note.findByIdAndUpdate(req.params.id,{title, description });
    res.redirect('/notes');
}
notesCtrl.deleteNote = async (req,res) =>{
    await Note.findByIdAndDelete(req.params.id);
    res.redirect('/notes');

}

module.exports=notesCtrl;