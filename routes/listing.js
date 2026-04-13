const express=require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const {isLoggedIn,isOwner,validateListing}=require("../middleware.js");


// INDEX ROUTE
router.get("/", wrapAsync(async (req, res) => {
  const allListing = await Listing.find({});
  res.render("listings/index.ejs", { allListing });
}));

// NEW ROUTE
router.get("/new",isLoggedIn,(req, res) => {
  console.log("Auth:", req.isAuthenticated());
  console.log("User:", req.user);
res.render("listings/new.ejs");

  
});

// Show route
router.get("/:id", wrapAsync(async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id).populate({path:"reviews",populate:{path:"author"}}).populate("owner");
  if(!listing){
    req.flash("error","Listing you requested does not exist!");
    res.redirect("/listings");
  }
  else{
     res.render("listings/show.ejs", { listing});
  }
 
}));
// CREATE ROUTE
router.post("/",isLoggedIn,validateListing, wrapAsync(async (req, res) => {
  // 🔥 convert price to number
  req.body.listing.price = Number(req.body.listing.price);
  const newListing = new Listing(req.body.listing);
  console.log(req.user._id);
  newListing.owner=req.user._id;
  const saved = await newListing.save();
  res.redirect("/listings");
}));

// EDIT ROUTE
router.get("/:id/edit",isLoggedIn,isOwner, wrapAsync(async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/edit.ejs", { listing });
}));

// UPDATE ROUTE
router.put("/:id",isLoggedIn,isOwner,validateListing, wrapAsync(async (req, res) => {
  
  req.body.listing.price = Number(req.body.listing.price);
  await Listing.findByIdAndUpdate(id, req.body.listing);
  res.redirect(`/listings/${id}`);
}));

// DELETE ROUTE
router.delete("/:id",isLoggedIn,isOwner,wrapAsync(async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndDelete(id);
  req.flash("success","Listing deleted!");
  res.redirect("/listings");
}));

module.exports=router;