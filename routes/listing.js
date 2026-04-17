const express=require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const {isLoggedIn,isOwner,validateListing}=require("../middleware.js");
const ListingController=require("../controllers/listing.js");

// INDEX ROUTE
router.get("/", wrapAsync(ListingController.index));

// NEW ROUTE
router.get("/new",isLoggedIn,ListingController.new);

// Show route
router.get("/:id", wrapAsync(ListingController.show));

// CREATE ROUTE
router.post("/",isLoggedIn,validateListing, wrapAsync(ListingController.create));

// EDIT ROUTE
router.get("/:id/edit",isLoggedIn,isOwner, wrapAsync(ListingController.edit));

// UPDATE ROUTE
router.put("/:id",isLoggedIn,isOwner,validateListing, wrapAsync(ListingController.update));

// DELETE ROUTE
router.delete("/:id",isLoggedIn,isOwner,wrapAsync(ListingController.delete));

module.exports=router;