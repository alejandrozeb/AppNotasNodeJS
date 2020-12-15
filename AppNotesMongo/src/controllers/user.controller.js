const userCtrl={};
userCtrl.renderSignupform = (req,res)=>{
    res.render('users/signup');
};

userCtrl.signup = (req, res) =>{
    res.send('signup');
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

module.exports = usersCtrl;