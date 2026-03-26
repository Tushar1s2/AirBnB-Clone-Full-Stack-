# 🏡 Airbnb Clone (Full Stack Project)

## 📌 Project Overview

A full-stack Airbnb clone built using Node.js, Express, MongoDB, and EJS.
This project demonstrates strong backend fundamentals, RESTful architecture, data validation, and dynamic server-side rendering.

The application now includes CRUD functionality, review system integration, validation middleware, flash messaging, and a responsive UI.

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
* Express Middleware

---

## 📁 Project Structure

```
AIRBNBCLONE/
├── init/                # Database seeding
├── models/              # Mongoose schemas
├── routes/              # Route handlers (modular)
├── views/
│   ├── includes/        # Navbar, Footer
│   ├── layout/          # Boilerplate layouts
│   └── listings/        # Listing & review UI
├── public/              # Static assets
├── utils/
│   ├── wrapAsync.js     # Async error wrapper
│   └── expressError.js  # Custom error class
├── schema.js            # Joi validation schemas
├── app.js               # Main server file
└── package.json
```

---

## ⚙️ Setup Instructions

```bash
npm install
mongod
node app.js
```

### 🌱 Seed Initial Data

```bash
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
* Fixed static asset issues

### 🔹 22 March 2026 🚀 (Validation & UX)

* Implemented Joi validation middleware
* Added flash messaging system
* Improved error handling flow
* Created custom error page

### 🔹 26 March 2026 🛠️ (Debugging & Stability)

#### 🔥 Major Fixes:

* Fixed route priority issues (`/:id` vs `/new`, `/edit`)
* Resolved import/export mismatch (Joi schemas)
* Corrected `_id` usage in EJS
* Fixed data type mismatch (string → number)
* Debugged silent validation failures
* Clarified MongoDB shell behavior (cursor, `.pretty()`)

#### 🧠 Key Debugging Learnings:

* Schema structure must match request body
* Express routes follow top-to-bottom priority
* Form data is always received as strings
* Import/export mismatches can silently break logic
* Always debug using `console.log(req.body)`
* Error middleware can mask root issues

---

## ✅ Current Status

* ✔️ Full CRUD implemented
* ✔️ Review system integrated
* ✔️ Validation working correctly
* ✔️ Flash messaging active
* ✔️ Error handling structured
* ✔️ UI responsive and clean
* ✔️ Backend stable and debugged

---

## 🎯 Next Goals

* 🔒 Authentication (Login / Signup)
* 🛡️ Authorization (Owner-based permissions)
* ☁️ Image upload (Cloudinary / Multer)
* 🌍 Deployment (Render / Railway)
* ⭐ Review deletion & edit feature

---

## 🧠 Key Learnings

* Middleware chaining & execution flow
* RESTful API design principles
* Joi validation & schema design
* MongoDB relationships & population
* Error handling patterns in Express
* EJS templating with layouts
* Debugging real-world backend issues

---

## 👨‍💻 Author

**Tushar Panwar**
