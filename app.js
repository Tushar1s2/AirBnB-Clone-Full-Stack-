const express = require("express");
const app = express();
const mongoose = require("mongoose");
const mongo_url = "mongodb://127.0.0.1:27017/wanderlust";
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync= require("./utils/wrapAsync.js");
const expressError=require("./utils/expressError.js");
const {listingSchema}=require("./schema.js");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

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

const validateListing=(req,res,next)=>{
  let {err}=listingSchema.validate(req.body);
  if(err){
    throw new expressError(400,res.err)
  }
  else{
    next();
  }
}

// INDEX ROUTE
app.get("/listings", wrapAsync(async (req, res) => {
  const allListing = await Listing.find({});
  res.render("listings/index.ejs", { allListing });
}));

// NEW ROUTE
app.get("/listings/new", (req, res) => {
  res.render("listings/new.ejs")
});

// Show route
app.get("/listings/:id", wrapAsync(async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/show.ejs", { listing });
}));

// CREATE ROUTE
app.post("/listings",validateListing(wrapAsync(async (req, res, next) => {
  const newListing = new Listing(req.body.listing);
  await newListing.save();
  res.redirect("/listings");
})));

// EDIT ROUTE
app.get("/listings/:id/edit", wrapAsync(async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/edit.ejs", { listing });
}));

// UPDATE ROUTE
app.put("/listings/:id", validateListing(wrapAsync(async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  res.redirect(`/listings/${id}`);
})));

// DELETE ROUTE
app.delete("/listings/:id", wrapAsync(async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndDelete(id);
  res.redirect("/listings");
}));


// NO ROUTE FIND ERROR HANDLING
app.use((req, res, next) => {
  // next(new expressError(404, "Page not found"));
  res.render("listings/error.ejs");
});
// ERROR HANDLING MIDDLEWARE FOR ALL ERROR
app.use((err, req, res, next) => {
  let { status = 500, message = "Something went wrong" }=err;
  res.render("listings/error.ejs",{message});
  
});

app.listen(8080, () => {
  console.log("Server is listening to port 8080");
});