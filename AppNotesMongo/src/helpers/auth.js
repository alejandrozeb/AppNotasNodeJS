const helpers= {};

helpers.isAuthenticated = (req,res,next)=>{
    if(req.isAuthenticated()){//es una funcion de passport
        return next();
    }

    res.redirect('/users/signin');
}