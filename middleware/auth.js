module.exports = function(req, res, next) {
    if (req.email) {
        next();
    }   else{
        res.redirect("/login");
    }
}
