const express = require("express");
const app = express();
const mongoose = require("mongoose");
const mongo_url = "mongodb://127.0.0.1:27017/wanderlust";
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const flash = require("connect-flash"); 
const passport = require("passport");
const localStrategy=require("passport-local");
const User=require("./models/user.js");
// Routes
const listingsRoute=require("./routes/listing.js");
const reviewRoute=require("./routes/review.js");
const session=require("express-session");
const userRoute=require("./routes/user.js");
const { deserialize } = require("v8");
const sessionOptions={
  secret:"mysupersecret",
  resave:false,
  saveUninitialized: false,
  cookie:{
    expires:Date.now()+7*24*60*60*1000,
    maxAge:7*24*60*60*1000,
    httpOnly:true,
  }
};


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));
app.use(session(sessionOptions));

main()
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log(err);
  });
async function main() {
  await mongoose.connect(mongo_url);
}
app.get("/", (req, res) => {
  res.send("I am root path");
});
app.use(flash());

// Passport
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Middleware of flash
 app.use((req,res,next)=>{
  res.locals.success=req.flash("success");
  res.locals.error=req.flash("error");
  res.locals.currUser=req.user;
  next();
 });

app.get("/demouser",async(req,res) => {
  let fakeUser=new User({
    email:"abc@gmail.com",
    username:"abc"
  });

  let registerUser=await User.register(fakeUser,"helloword");
  res.send("registeredUser");
})
// Routes
app.use("/listings",listingsRoute);
app.use("/listings/:id/reviews",reviewRoute);
app.use("/",userRoute);

// NO ROUTE FIND ERROR HANDLING
app.use((err,req, res, next) => {
  res.render("listings/error.ejs",{err});
});
// ERROR HANDLING MIDDLEWARE FOR ALL ERROR
app.use((err, req, res, next) => {
  let { status = 500, message = "Something went wrong" } = err;
  res.render("listings/error.ejs", { message });
});

app.listen(8080, () => {
  console.log("Server is listening to port 8080");
});