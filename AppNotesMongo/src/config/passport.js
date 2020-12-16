
const passport= require('passport');
const localStrategy = require('passport-local').Strategy;
const User = require('../models/User');

passport.use(new localStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, async (email,password, done) =>{
    //tenemos un callback
    //aqui la logica de autenticacion

    //Match email`s user
    const user = await User.findOne({email});
    if(!user){
        return done(null,false, {message: 'Not user Found'});
    }else{
        //match password's user
         await user.matchPassword(passport);
    }
}
));