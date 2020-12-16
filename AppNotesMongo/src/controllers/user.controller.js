const userCtrl={};
userCtrl.renderSignupform = (req,res)=>{
    res.render('users/signup');
};

userCtrl.signup = (req, res) =>{
    const {name,email,password, confirm_password} = req.body;
    const errors= [];
    if(password != confirm_password){
        errors.push({text:'Passwords do not match'}); 
    }
    if(password.length < 4){
        errors.push({text: 'Passwords must be at least 4 characters.'});
    }

    res.send('received');
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