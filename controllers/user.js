const User=require("../models/user");


module.exports.renderSignup= (req, res) => {
    res.render("users/signup.ejs");
}
module.exports.signup=async (req, res, next) => {
    try {
        let { username, email, password } = req.body;
        const newUser = new User({ email, username });
        const registeredUser = await User.register(newUser, password);
        req.login(registeredUser, (err) => {
            if (err) {
                return next(err);
            }
            req.flash("success", "Welcome to Wandelust");
            res.redirect("/listings");
        })
    }
    catch (err) {
        req.flash("error", err.message);
        res.redirect("/signup");
    }
};

module.exports.renderLogin= (req, res) => {
    res.render("users/login.ejs");
}
module.exports.login= async (req, res) => {
    req.flash("success", "Welcome back to wanderlust");
    res.redirect(res.locals.redirectUrl || "/listings");
}

module.exports.logout= (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash("success", "You are logged out!");
        res.redirect("/listings");
    })
}