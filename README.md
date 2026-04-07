# 🏡 Airbnb Clone (Full Stack Project)

## 📌 Project Overview

A full-stack Airbnb clone built using Node.js, Express, MongoDB, and EJS.
This project demonstrates strong backend fundamentals, RESTful architecture, authentication, session management, and dynamic server-side rendering.

The application includes CRUD functionality, review system integration, validation middleware, flash messaging, authentication with Passport.js, and protected routing.

---

## 🚀 Features

### 🔹 Core Features

* 🔍 View all listings and individual listing details
* ➕ Create new listings
* ✏️ Edit existing listings
* ❌ Delete listings

### 🔹 Reviews System

* ⭐ Add reviews to listings
* 🧾 Store ratings & comments
* 🔗 MongoDB relationships (Listing ↔ Reviews)
* 📌 Populate reviews in listing detail page

### 🔹 Authentication & Authorization

* 🔐 User Signup & Login system
* 🛡️ Secure authentication using Passport.js
* 🍪 Session-based login persistence
* 🔄 Redirect-to-original-page after login
* 🚫 Protected routes using custom middleware (`isLoggedIn`)

### 🔹 Validation & UX

* ✅ Server-side validation using Joi
* ⚠️ Flash messages for success & error handling
* 🛑 Centralized error handling middleware

### 🔹 UI & Rendering

* 🎨 Responsive UI using Bootstrap 5
* 🧩 Reusable components (Navbar, Footer, Layouts)
* ⚡ Server-side rendering with EJS & ejs-mate

---

## 🛠️ Tech Stack

### 🔹 Frontend

* HTML5
* CSS3
* JavaScript
* EJS
* Bootstrap 5

### 🔹 Backend

* Node.js
* Express.js

### 🔹 Database

* MongoDB
* Mongoose

### 🔹 Tools & Libraries

* Joi (Validation)
* Connect-Flash (Flash Messaging)
* Method-Override
* ejs-mate (Layouts)
* Passport.js (Authentication)
* Passport-Local
* Express-Session

---

## 📁 Project Structure

```
AIRBNBCLONE/
├── init/
├── models/
├── routes/
├── views/
│   ├── includes/
│   ├── layout/
│   └── listings/
├── public/
├── utils/
├── schema.js
├── app.js
└── package.json
```

---

## ⚙️ Setup Instructions

```bash
npm install
mongod
node app.js
node init/index.js
```

---

## 📅 Development Log

### 🔹 18 March 2026

* Initial project setup
* MongoDB connection established
* Schema design & data seeding

### 🔹 19 March 2026

* Implemented full CRUD functionality
* Built EJS views
* Designed RESTful routes

### 🔹 20 March 2026 🚀

* Integrated Bootstrap UI
* Made layout responsive
* Created reusable components

### 🔹 22 March 2026 🚀 (Validation & UX)

* Implemented Joi validation middleware
* Added flash messaging system
* Improved error handling

### 🔹 26 March 2026 🛠️ (Debugging)

* Fixed route priority issues
* Debugged validation failures
* Corrected data type mismatches

### 🔹 27 March 2026 🧩 (Reviews Integration)

* Implemented nested routes
* Used `mergeParams`
* Fixed undefined params issues

### 🔹 28 March 2026 🔥 (Stability)

* Fixed null review crashes
* Improved DB safety checks
* Debugged routing flow

### 🔹 30 March 2026 ⚙️ (Sessions & Flash)

* Implemented session handling
* Integrated flash messages
* Fixed middleware order issues

### 🔹 3 April 2026 🔐 (Authentication Setup)

* Implemented user signup
* Integrated Passport.js
* Configured local strategy

### 🔹 4 April 2026 🔐 (Login & Protection)

* Implemented login/logout
* Protected routes using middleware
* Connected frontend with auth system

---

### 🔹 7 April 2026 🔥 (Authentication Deep Dive & Debugging)

#### 🚀 Major Improvements:

* Implemented **redirect-after-login flow**
* Created reusable middleware:

  * `isLoggedIn` → route protection
  * `saveRedirectUrl` → session-based redirect handling
* Fixed `ERR_HTTP_HEADERS_SENT` issues
* Debugged Passport session & `req.user` flow
* Understood and fixed:

  * Missing `return` after `res.redirect()`
  * Middleware flow (`next()` importance)
  * Session persistence issues

#### 🧠 Key Learnings:

* `req.user` only exists after successful login + session
* Authentication ≠ Registration
* Middleware flow control is critical (`return` & `next`)
* Sessions are the backbone of authentication
* Debugging requires tracing request lifecycle

---

## ✅ Current Status

* ✔️ Full CRUD implemented
* ✔️ Review system integrated
* ✔️ Authentication system working
* ✔️ Protected routes implemented
* ✔️ Redirect-after-login working
* ✔️ Session handling stable
* ✔️ Flash messaging working
* ✔️ Error handling structured
* ✔️ Backend stable and debugged

---

## 🎯 Next Goals

* 🛡️ Authorization (only owner can edit/delete)
* ☁️ Image upload (Cloudinary / Multer)
* 🌍 Deployment (Render / Railway)
* ⭐ Review edit & delete feature

---

## 🧠 Key Learnings

* Middleware chaining & execution flow
* RESTful API design
* Joi validation
* MongoDB relationships
* Session & authentication flow
* Passport.js internals
* Debugging real-world backend issues

---

## 👨‍💻 Author

**Tushar Panwar**
