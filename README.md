# 🏡 Airbnb Clone (Full Stack Project)

## 📌 Project Overview

A full-stack Airbnb clone built using Node.js, Express, MongoDB, and EJS.  
This project demonstrates strong backend fundamentals, RESTful architecture, data validation, and dynamic server-side rendering.

The application includes CRUD functionality, review system integration, validation middleware, flash messaging, authentication, and a responsive UI.

---

## 🚀 Features

### 🔹 Core Features
- 🔍 View all listings and individual listing details  
- ➕ Create new listings  
- ✏️ Edit existing listings  
- ❌ Delete listings  

### 🔹 Reviews System
- ⭐ Add reviews to listings  
- 🧾 Store ratings & comments  
- 🔗 MongoDB relationships (Listing ↔ Reviews)  
- 📌 Populate reviews in listing detail page  

### 🔹 Authentication
- 🔐 User Signup & Login system  
- 🛡️ Secure authentication using Passport.js  
- 🍪 Session-based login persistence  
- 🚫 Protected routes for authorized users  

### 🔹 Validation & UX
- ✅ Server-side validation using Joi  
- ⚠️ Flash messages for success & error handling  
- 🛑 Centralized error handling middleware  

### 🔹 UI & Rendering
- 🎨 Responsive UI using Bootstrap 5  
- 🧩 Reusable components (Navbar, Footer, Layouts)  
- ⚡ Server-side rendering with EJS & ejs-mate  

---

## 🛠️ Tech Stack

### 🔹 Frontend
- HTML5  
- CSS3  
- JavaScript  
- EJS  
- Bootstrap 5  

### 🔹 Backend
- Node.js  
- Express.js  

### 🔹 Database
- MongoDB  
- Mongoose  

### 🔹 Tools & Libraries
- Joi (Validation)  
- Connect-Flash (Flash Messaging)  
- Method-Override  
- ejs-mate (Layouts)  
- Express Middleware  
- Passport.js (Authentication)  
- Passport-Local  

---

## 📁 Project Structure
AIRBNBCLONE/
├── init/
├── models/
├── routes/
├── views/
│ ├── includes/
│ ├── layout/
│ └── listings/
├── public/
├── utils/
├── schema.js
├── app.js
└── package.json

---

## ⚙️ Setup Instructions

```bash
npm install
mongod
node app.js
node init/index.js
📅 Development Log
🔹 18 March 2026
Initial project setup
MongoDB connection established
Schema design & data seeding
🔹 19 March 2026
Implemented full CRUD functionality
Built EJS views
Designed RESTful routes
🔹 20 March 2026 🚀
Integrated Bootstrap UI
Made layout responsive
Created reusable components
Fixed static asset issues
🔹 22 March 2026 🚀 (Validation & UX)
Implemented Joi validation middleware
Added flash messaging system
Improved error handling flow
Created custom error page
🔹 26 March 2026 🛠️ (Debugging & Stability)
🔥 Major Fixes:
Fixed route priority issues
Resolved Joi import/export mismatch
Corrected _id handling in EJS
Fixed string → number mismatch
Debugged validation failures
🧠 Key Learnings:
Route order matters in Express
Form data always comes as string
Debugging requires checking req.body
Middleware can hide root errors
🔹 27 March 2026 🧩 (Routing & Reviews Integration)
Implemented nested review routes
Learned mergeParams: true
Fixed undefined params issue
Debugged review creation flow
🔹 28 March 2026 🚀 (Critical Debugging & Stability)
🔥 Major Fixes:
Fixed null reviews crash
Fixed nested route param flow
Improved router mounting
Added defensive DB checks
🧠 Key Learnings:
Always validate DB response
Route design = data flow
Debugging = trace flow, not error
🔹 30 March 2026 ⚙️ (Sessions & Flash System Deep Dive)
Implemented session-based user data storage
Understood req.session lifecycle
Integrated flash messages with sessions
Fixed flash messages not displaying in EJS
🧠 Key Learnings:
Flash depends on sessions internally
Session persists across requests
Middleware order is critical (session → flash → routes)
🔹 3 April 2026 🔐 (Authentication Setup - Passport.js)
Implemented user signup functionality
Created User schema with authentication fields
Integrated Passport.js with local strategy
Configured session-based authentication
🧠 Key Learnings:
Passport simplifies authentication logic
Sessions are required for login persistence
Strategy defines how authentication works
🔹 4 April 2026 🔐 (Login, Authorization & UI Integration)
🔥 Major Features:
Implemented login/logout functionality
Protected routes using authentication middleware
Connected login/signup forms with backend
Added flash messages for auth success/error
🧠 Key Learnings:
req.login() and req.logout() control auth flow
Middleware is used to protect routes
Authentication must be integrated with UI + backend
🔹 1 April 2026 🔥 (Bug Fixing & UI Integration)
Fixed flash.ejs include error in boilerplate layout
🧠 Key Learnings:
EJS include paths must be correct
Layout rendering depends on file structure
Small path errors can break UI
✅ Current Status
✔️ Full CRUD implemented
✔️ Review system integrated
✔️ Authentication system implemented
✔️ Validation working correctly
✔️ Flash messaging active
✔️ Session handling implemented
✔️ Error handling structured
✔️ UI responsive and clean
✔️ Backend stable and debugged
🎯 Next Goals
🛡️ Authorization (Owner-based permissions)
☁️ Image upload (Cloudinary / Multer)
🌍 Deployment (Render / Railway)
⭐ Review deletion & edit feature
🧠 Key Learnings
Middleware chaining & execution flow
RESTful API design
Joi validation
MongoDB relationships
Express error handling
Session & authentication integration
Debugging real-world backend issues
👨‍💻 Author

Tushar Panwar