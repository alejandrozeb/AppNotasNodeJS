const router = require("../routes/notes.routes");

const notesCtrl = {};

notesCtrl.renderNoteForm = (req,res) =>{
    res.send('note add');
}
module.exports=notesCtrl;