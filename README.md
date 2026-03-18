# 🏡 Airbnb Clone (Full Stack Project)

## 📌 Project Overview

This is a full-stack Airbnb clone project using **Node.js, Express, MongoDB, and EJS**.

Currently, the project supports **basic listing display functionality** including:

* Viewing all listings
* Viewing individual listing details

---

## 🛠️ Tech Stack

* Frontend: HTML, CSS, JS, EJS
* Backend: Node.js, Express.js
* Database: MongoDB, Mongoose

---

## 📁 Project Structure

```
AIRBNBCLONE/
├── init/
├── models/
│    └── listing.js
├── views/
│    └── listings/
│         ├── index.ejs
│         └── show.ejs
├── app.js
├── package.json
```

---

## ⚙️ Setup Instructions

```bash
npm install
mongod
node app.js
```

---

## 🌱 Database Seeding

```bash
node init/index.js
```

---

# 📅 Development Log (Progress Tracker)

## 🔹 18 March 2026

* Initialized project
* Connected MongoDB using Mongoose
* Created Listing schema
* Learned about `module.exports`
* Fixed schema vs data mismatch bug (image object vs string)
* Successfully seeded database using `insertMany()`
* Setup `.gitignore`
* Prepared project for GitHub

---

## 🔹 19 March 2026

* Created **Index Route** (`/listings`)

  * Fetched all listings using `Listing.find()`
  * Rendered data using EJS

* Built **index.ejs**

  * Displayed listings dynamically using loop

* Created **Show Route** (`/listings/:id`)

  * Used `req.params` to extract ID
  * Used `findById()` to fetch single listing

* Built **show.ejs**

  * Displayed detailed listing info

* Learned:

  * Difference between `req.params`, `req.body`
  * Importance of `await` in async DB calls
  * How `res.render()` works with views
  * Folder structure importance (`views/listings`)

---

## 🔹 20 March 2026

* (Your updates)

---

# 🚀 Current Status

✅ Database connected
✅ Data seeding working
✅ Index Route working
✅ Show Route working
🔄 CRUD routes (in progress)

---

# 🎯 Next Goals

* [ ] Create Route (Add new listing)
* [ ] Edit & Update Route
* [ ] Delete Route
* [ ] Add form handling (`req.body`)
* [ ] Improve UI styling

---

# 🧠 Key Learnings

* Always match **render path with folder structure**
* MongoDB operations are **async → always use `await`**
* `req.params` is used for **dynamic route values**
* `express.urlencoded()` is required for form data
* EJS helps render dynamic data on UI

---

## 👨‍💻 Author

Tushar Panwar
