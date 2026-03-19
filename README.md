🏡 Airbnb Clone (Full Stack Project)
📌 Project Overview

This is a full-stack Airbnb clone project using Node.js, Express, MongoDB, and EJS.

Currently, the project supports full CRUD functionality including:

Viewing all listings

Viewing individual listing details

Creating new listings

Editing existing listings

Deleting listings

🛠️ Tech Stack

Frontend: HTML, CSS, JS, EJS

Backend: Node.js, Express.js

Database: MongoDB, Mongoose

📁 Project Structure
AIRBNBCLONE/
├── init/
├── models/
│    └── listing.js
├── views/
│    └── listings/
│         ├── index.ejs
│         ├── show.ejs
│         ├── new.ejs
│         └── edit.ejs
├── app.js
├── package.json
⚙️ Setup Instructions
npm install
mongod
node app.js
🌱 Database Seeding
node init/index.js
📅 Development Log (Progress Tracker)
🔹 18 March 2026

Initialized project

Connected MongoDB using Mongoose

Created Listing schema

Learned about module.exports

Fixed schema vs data mismatch bug (image object vs string)

Successfully seeded database using insertMany()

Setup .gitignore

Prepared project for GitHub

🔹 19 March 2026

Implemented Index & Show Routes using find() and findById()

Built index.ejs & show.ejs for dynamic rendering

Implemented Create Route (POST /listings)

Built new.ejs for adding listings

Implemented Edit & Update Routes (PUT /listings/:id)

Built edit.ejs with pre-filled data

Implemented Delete Route (DELETE /listings/:id)

Applied RESTful routing principles

Used method-override for PUT & DELETE

Worked with MongoDB CRUD using Mongoose

🔹 20 March 2026

(Your updates)

🚀 Current Status

✅ Database connected
✅ Data seeding working
✅ Index Route working
✅ Show Route working
✅ CRUD routes implemented

🎯 Next Goals

 Improve UI styling

 Add validations

 Add authentication

 Deploy project

🧠 Key Learnings

Always match render path with folder structure

MongoDB operations are async → always use await

req.params and req.body usage

express.urlencoded() is required for form data

RESTful routing (GET, POST, PUT, DELETE)

Method override for PUT & DELETE

EJS for dynamic rendering

👨‍💻 Author

Tushar Panwar