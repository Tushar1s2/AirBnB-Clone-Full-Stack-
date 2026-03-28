const express=require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const expressError = require("../utils/expressError.js");
const { listingSchema} = require("../schema.js");
const Listing = require("../models/listing.js");

const validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);
  if (error) {
    console.log("VALIDATION ERROR:", error.message);
    throw new expressError(400, error.message);
  } else {
    next();
  }
};



// INDEX ROUTE
router.get("/", wrapAsync(async (req, res) => {
  const allListing = await Listing.find({});
  res.render("listings/index.ejs", { allListing });
}));

// NEW ROUTE
router.get("/new", (req, res) => {
  res.render("listings/new.ejs")
});

// Show route
router.get("/:id", wrapAsync(async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id).populate("reviews");
  res.render("listings/show.ejs", { listing});
}));

// CREATE ROUTE
router.post("/", validateListing, wrapAsync(async (req, res) => {
  // 🔥 convert price to number
  req.body.listing.price = Number(req.body.listing.price);
  const newListing = new Listing(req.body.listing);
  console.log("FULL BODY:", req.body);
  console.log("LISTING:", req.body.listing);
  const saved = await newListing.save();
  console.log("SAVED:", saved);
  res.redirect("/listings");
}));

// EDIT ROUTE
router.get("/:id/edit", wrapAsync(async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/edit.ejs", { listing });
}));

// UPDATE ROUTE
router.put("/:id", validateListing, wrapAsync(async (req, res) => {
  let { id } = req.params;
  req.body.listing.price = Number(req.body.listing.price); // ✅ FIX
  await Listing.findByIdAndUpdate(id, req.body.listing);
  res.redirect(`/listings/${id}`);
}));

// DELETE ROUTE
router.delete("/:id", wrapAsync(async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndDelete(id);
  res.redirect("/listings");
}));

module.exports=router;