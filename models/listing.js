const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        default: "/images/jpg.jpg",
        set: (str) => str === "" ? "/images/jpg.jpg" : str,
    },
    price: {
        type: Number,
        required: true,
    },
    location: String,
    country: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref:"Review",
        },
    ]
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;