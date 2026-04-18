const Listing = require("../models/listing");

module.exports.index = async (req, res) => {
    const allListing = await Listing.find({});
    res.render("listings/index.ejs", { allListing });
};

module.exports.new=(req, res) => {
    res.render("listings/new.ejs");
}

module.exports.show = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate({ path: "reviews", populate: { path: "author" } }).populate("owner");
    if (!listing) {
        req.flash("error", "Listing you requested does not exist!");
        res.redirect("/listings");
    }
    else {
        res.render("listings/show.ejs", { listing });
    }
}

module.exports.create=async (req, res) => {
  let url=req.file.path;
  let filename=req.file.filename;
  req.body.listing.price = Number(req.body.listing.price);
  const newListing = new Listing(req.body.listing);
  newListing.owner=req.user._id;
  newListing.image={url,filename};
  const saved = await newListing.save();
  res.redirect("/listings");
}
module.exports.edit=async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/edit.ejs", { listing });
}

module.exports.update=async (req, res) => {
  req.body.listing.price = Number(req.body.listing.price);
  await Listing.findByIdAndUpdate(id, req.body.listing);
  res.redirect(`/listings/${id}`);
}

module.exports.delete=async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndDelete(id);
  req.flash("success","Listing deleted!");
  res.redirect("/listings",);
}