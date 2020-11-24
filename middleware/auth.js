module.exports = function(req, res, next) {
    if (req.user) {
        console.log('inside authcheq')
        next();
    }   else{
        res.redirect("/login");
    }
}
//was req.user