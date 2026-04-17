const express = require("express");
const router = express.Router({ mergeParams: true });
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const {saveRedirectUrl}=require("../middleware.js");
const UserController=require("../controllers/user.js");

//Signup
router.get("/signup",UserController.renderSignup);
router.post("/signup", wrapAsync(UserController.signup));

//Login
router.get("/login",UserController.renderLogin);
router.post("/login",saveRedirectUrl, passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }),UserController.login);

//Logout
router.get("/logout",UserController.logout);

module.exports = router;
