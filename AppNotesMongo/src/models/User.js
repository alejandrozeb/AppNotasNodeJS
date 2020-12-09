const {Schema,model} = require('mongoose');

const UserSchema = new Schema({
    name: {type: String,required: true},
    email: {type: String,required: true},
    password: {type: String,required: true},
},{timestamps:true});
//podemos tratar la informacion desde aqui, podemos definir metodos



module.exports = model('User', UserSchema);