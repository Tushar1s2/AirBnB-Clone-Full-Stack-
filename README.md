# 🏡 Airbnb Clone (Full Stack Project)

## 📌 Project Overview

This is a full-stack Airbnb clone built using Node.js, Express, MongoDB, and EJS.
The project demonstrates strong backend fundamentals, RESTful architecture, and dynamic UI rendering.

The application now includes CRUD operations, validation, flash messaging, and a responsive UI.

---

## 🚀 Features

* 🔍 View individual listing details
* ➕ Create new listings
* ✏️ Edit listings
* ❌ Delete listings
* ✅ Server-side validation using Joi
* ⚠️ Flash messages for success & error feedback
* 🎨 Responsive UI using Bootstrap 5
* 🧩 Reusable components (Navbar & Footer)
* ⚡ Server-side rendering using EJS

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

### 🔹 Additional Tools

* Joi (Validation)
* Connect-Flash (Flash Messages)
* Method-Override

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
│ ├── wrapAsync.js
│ └── expressError.js
├── schema.js
├── app.js
└── package.json

---

## ⚙️ Setup Instructions

```bash
npm install
mongod
node app.js
```

### 🌱 Database Seeding

```bash
node init/index.js
```

---

## 📅 Development Log

### 🔹 18 March 2026

* Project setup
* MongoDB connection
* Schema creation
* Data seeding

### 🔹 19 March 2026

* Implemented full CRUD
* Built EJS pages
* RESTful routing

### 🔹 20 March 2026 🚀

* UI styling with Bootstrap
* Responsive layout
* Fixed static/image issues
* Created reusable components

### 🔹 22 March 2026 🚀 (Validation & UX Update)

* Added Joi validation middleware
* Implemented flash messages (success & error)
* Improved error handling flow
* Created custom error page (error.ejs)

---

### 🔹 26 March 2026 🛠️ (Debugging & Stability Fixes)

#### 🔥 Major Issues Fixed:

* ❌ Fixed route order issue (`/:id` overriding `/new` and `/edit`)
* ❌ Fixed import/export mismatch causing `undefined.validate()` error
* ❌ Fixed incorrect `_id` usage in EJS templates
* ❌ Fixed type mismatch (string → number for price)
* ❌ Fixed silent validation failures by proper debugging
* ❌ Fixed MongoDB confusion (cursor output, `it`, `.pretty()` usage)

#### 🧠 Key Debugging Learnings:

* Always match Joi schema with request structure
* Route order matters in Express (top → bottom)
* Forms send data as strings → must sanitize
* Import/export syntax must match exactly
* MongoDB shell uses cursor (lazy loading)
* Error middleware can hide real issues
* Always debug using `console.log(req.body)`

---

## ✅ Current Status

✔️ CRUD operations complete
✔️ Validation implemented
✔️ Flash messaging working
✔️ Error handling structured
✔️ UI responsive and clean
✔️ Backend stable

---

## 🎯 Next Goals

* 🔒 Authentication (Login / Signup)
* 🛡️ Authorization (only owner can edit/delete)
* ☁️ Image upload (Cloudinary / Multer)
* 🌍 Deployment (Render / Railway)

---

## 🧠 Key Learnings

* Middleware chaining & execution flow
* Error handling in Express (404 + global handler)
* Validation using Joi
* Flash messaging for UX
* RESTful API design
* EJS templating with layouts
* Debugging real backend issues (production-level thinking)

---

## 👨‍💻 Author

**Tushar Panwar**
