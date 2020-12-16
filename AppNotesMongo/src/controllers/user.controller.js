const userCtrl={};
const User = require('../models/User');
userCtrl.renderSignupform = (req,res)=>{
    res.render('users/signup');
};

userCtrl.signup = async (req, res) =>{
    const {name,email,password, confirm_password} = req.body;
    const errors= [];
    if(password != confirm_password){
        errors.push({text:'Passwords do not match'}); 
    }
    if(password.length < 4){
        errors.push({text: 'Passwords must be at least 4 characters.'});
    }
    if(errors.length > 0){
        res.render('users/signup',{
            errors,
            name,
            email,
            password,
            confirm_password
        });
        //enviamos el form con el formulario
    }else{
        //guardando datos
        const emailUser = await User.findOne({email: email});
        if(emailUser){
            req.flash('error_msg', 'The email is already in use.');
            res.redirect('/users/signup');
        }else{
            const newUser=new User({name,email,password});
            await newUser.save();
            res.redirect('/users/signin');
        }
    }
};
userCtrl.renderSiginform = (req,res) =>{
    res.render('users/signin');
};

userCtrl.signin= (req,res) =>{
    res.send('Signin');
};
userCtrl.logout = (req,res) =>{
    res.send('logout');
};

module.exports = userCtrl;