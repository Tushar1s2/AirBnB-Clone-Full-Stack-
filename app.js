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

const validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);
  if (error) {
    console.log("VALIDATION ERROR:", error.message); // 👈 ADD THIS
    throw new expressError(400, error.message);
  } else {
    next();
  }
};

const validateReview = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body);
  if (error) {
    console.log("VALIDATION ERROR:", error.message); // 👈 ADD THIS
    throw new expressError(400, error.message);
  } else {
    next();
  }
};

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
app.post("/listings", validateListing, wrapAsync(async (req, res) => {
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
app.get("/listings/:id/edit", wrapAsync(async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/edit.ejs", { listing });
}));

// UPDATE ROUTE
app.put("/listings/:id", validateListing, wrapAsync(async (req, res) => {
  let { id } = req.params;
  req.body.listing.price = Number(req.body.listing.price); // ✅ FIX
  await Listing.findByIdAndUpdate(id, req.body.listing);
  res.redirect(`/listings/${id}`);
}));

// DELETE ROUTE
app.delete("/listings/:id", wrapAsync(async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndDelete(id);
  res.redirect("/listings");
}));

//review
app.post("/listings/:id/reviews",validateReview,wrapAsync(async (req, res) => {
  let listing = await Listing.findById(req.params.id);
  let newReview =new Review(req.body.review);
  listing.reviews.push(newReview);
  await newReview.save();
  await listing.save();
  console.log("New review saved!");
  res.send("Review saved");
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