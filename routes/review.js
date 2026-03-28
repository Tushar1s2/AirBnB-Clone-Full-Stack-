const express=require("express");
const router = express.Router({ mergeParams: true });
const {reviewSchema } = require("../schema.js");
const Listing = require("../models/listing.js");
const Review= require("../models/review.js");
const wrapAsync = require("../utils/wrapAsync.js");
const expressError = require("../utils/expressError.js");

const validateReview = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body);
  if (error) {
    console.log("VALIDATION ERROR:", error.message);
    throw new expressError(400, error.message);
  } else {
    next();
  }
};

//REVIEW ROUTE
router.post("/",validateReview,wrapAsync(async (req, res) => {
  let{id}=req.params;
  let listing = await Listing.findById(req.params.id);
  let newReview =new Review(req.body.review);
  listing.reviews.push(newReview);
  await newReview.save();
  await listing.save();
  res.redirect(`/listings/${id}`)
}));

// DELETE REVIEW 
router.delete("/:reviewId",wrapAsync(async(req,res)=>{
  let {id,reviewId}=req.params;
  await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}});
  await Review.findByIdAndDelete(reviewId);
  res.redirect(`/listings/${id}`);
}));

module.exports=router;