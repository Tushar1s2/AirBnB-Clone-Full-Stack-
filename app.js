const express=require("express");
const app=express();
const mongoose=require("mongoose");
const mongo_url = "mongodb://127.0.0.1:27017/wanderlust";
const Listing=require("./models/listing.js");


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
app.get("/",(req,res)=>{
    res.send("I am root path");
});

app.get("/testListing",async(req,res)=>{
    let sampleListing=new Listing({
        title:"My home",
        description:"By the beach",
        price:1200,
        location:"australia",
        country:"India"
    });
    await sampleListing.save();
    console.log("Sample was saved");
    res.send("Successfull testing");
});

app.listen(8080,()=>{
    console.log("Server is listening to port 8080");
});