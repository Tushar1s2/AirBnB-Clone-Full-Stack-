const express = require("express");
const app = express();
const mongoose = require("mongoose");
const mongo_url = "mongodb://127.0.0.1:27017/wanderlust";
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const expressError = require("./utils/expressError.js");
const Review= require("./models/review.js");
const { listingSchema, reviewSchema } = require("./schema.js");
const listingsRoute=require("./routes/listing.js");


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

const validateReview = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body);
  if (error) {
    console.log("VALIDATION ERROR:", error.message);
    throw new expressError(400, error.message);
  } else {
    next();
  }
};

app.use("/listings",listingsRoute);

//REVIEW ROUTE
app.post("/listings/:id/reviews",validateReview,wrapAsync(async (req, res) => {
  let{id}=req.params;
  let listing = await Listing.findById(req.params.id);
  let newReview =new Review(req.body.review);
  listing.reviews.push(newReview);
  await newReview.save();
  await listing.save();
  res.redirect(`/listings/${id}`)
}));

// DELETE REVIEW 
app.delete("/listings/:id/reviews/:reviewId",wrapAsync(async(req,res)=>{
  let {id,reviewId}=req.params;
  await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}});
  await Review.findByIdAndDelete(reviewId);
  res.redirect(`/listings/${id}`);
}));

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