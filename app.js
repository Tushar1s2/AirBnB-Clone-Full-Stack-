const express = require("express");
const app = express();
const mongoose = require("mongoose");
const mongo_url = "mongodb://127.0.0.1:27017/wanderlust";
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
// Routes
const listingsRoute=require("./routes/listing.js");
const reviewRoute=require("./routes/review.js");

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

// Routes
app.use("/listings",listingsRoute);
app.use("/listings/:id/reviews",reviewRoute);


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