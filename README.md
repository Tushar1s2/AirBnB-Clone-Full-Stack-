🏡 Airbnb Clone (Full Stack Project)
📌 Project Overview

This is a full-stack Airbnb clone built using Node.js, Express, MongoDB, and EJS.

The application currently supports complete CRUD operations along with responsive UI using Bootstrap:

View all listings

View individual listing details

Create new listings

Edit existing listings

Delete listings

🛠️ Tech Stack

Frontend:

HTML

CSS

JavaScript

EJS

Bootstrap 5

Backend:

Node.js

Express.js

Database:

MongoDB

Mongoose

📸 Features Preview
🏠 All Listings Page

Card-based responsive UI

Clean grid layout using Bootstrap

➕ Create Listing Page

Structured form with proper spacing

User-friendly input fields

📄 Listing Detail Page

Image preview

Edit & Delete actions

Clean layout with footer

📁 Project Structure
AIRBNBCLONE/
├── init/
│    └── index.js
├── models/
│    └── listing.js
├── views/
│    └── listings/
│         ├── index.ejs
│         ├── show.ejs
│         ├── new.ejs
│         └── edit.ejs
├── public/
│    └── css/
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

Fixed schema mismatch bug

Seeded database using insertMany()

Setup .gitignore

🔹 19 March 2026

Implemented full CRUD operations

Built all EJS templates (index, show, new, edit)

Applied RESTful routing

Used method-override

Practiced MongoDB operations

🔹 20 March 2026 🚀 (Major UI Update)

Styled all EJS pages

Integrated Bootstrap 5 for UI components

Built responsive card layout for listings

Designed clean form UI for creating/editing listings

Improved listing detail page layout

Fixed static file serving issues

Fixed image rendering issues

Created reusable navbar & footer components

🚀 Current Status

✅ Database connected
✅ Data seeding working
✅ Full CRUD functionality implemented
✅ UI fully styled using Bootstrap
✅ Responsive design implemented
✅ Static files working properly

🎯 Next Goals

Add form validations (client + server)

Implement authentication (Login/Signup)

Add authorization (only owner can edit/delete)

Image upload (Cloudinary / Multer)

Add flash messages (success/error)

Deploy project (Render / Railway)

🧠 Key Learnings

Serving static files using express.static()

Bootstrap integration with EJS templates

Component-based UI (navbar, footer)

RESTful routing in Express

Handling form data with req.body

MongoDB CRUD with Mongoose

Debugging real-world issues (CSS not loading, image paths)

👨‍💻 Author

Tushar Panwar