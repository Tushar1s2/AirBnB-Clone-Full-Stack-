# 🏡 Airbnb Clone — Full Stack Web Application

> A production-grade Airbnb clone built with the **MERN-adjacent stack** (Node.js, Express, MongoDB, EJS).  
> Demonstrates end-to-end full-stack development: RESTful architecture, MVC pattern, authentication, authorization, session management, relational data modeling, and dynamic server-side rendering.

---

## 📌 Overview

This project is a fully functional rental listing platform inspired by Airbnb.  
Users can browse listings, create and manage their own properties, leave reviews, and authenticate securely.  
Built as part of the **Apna College Full Stack Development Course**.

---

## ✨ Features

### 🏠 Listings (Full CRUD)
- View all listings and individual listing detail pages
- Create, edit, and delete listings
- Listings are ownership-linked — each listing is tied to the user who created it (`User ↔ Listing` relationship)
- **Authorization enforced** — only the owner of a listing can edit or delete it

### ⭐ Reviews System
- Authenticated users can add reviews (rating + comment) to listings
- Reviews are stored with a `Listing ↔ Review` relationship via MongoDB references
- Reviews are populated and rendered on the listing detail page
- **Authorization enforced** — only the author of a review can delete it

### 🔐 Authentication & Authorization
- User Signup and Login using **Passport.js** (Local Strategy)
- Session-based login persistence with **Express-Session**
- Redirect-after-login flow — users return to their intended page post-login
- Protected routes using custom `isLoggedIn` middleware
- `saveRedirectUrl` middleware for session-based redirect handling
- **`isOwner` middleware** — verifies the logged-in user is the owner of a listing before allowing edit/delete
- **`isReviewAuthor` middleware** — verifies the logged-in user is the author of a review before allowing delete

### ✅ Validation & Error Handling
- Server-side validation using **Joi** schema validation
- Flash messages for success and error feedback (via **Connect-Flash**)
- Centralized error handling middleware for clean, consistent error responses

### 🎨 UI & Rendering
- Responsive UI built with **Bootstrap 5**
- Server-side rendering using **EJS** templating engine with **ejs-mate** layouts
- Reusable components: Navbar, Footer, Layout wrappers
- Edit/Delete buttons conditionally rendered — visible only to the owner/author

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | HTML5, CSS3, JavaScript, EJS, Bootstrap 5 |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB, Mongoose |
| **Auth** | Passport.js, Passport-Local, Express-Session |
| **Validation** | Joi |
| **Architecture** | MVC (Model-View-Controller) |
| **Utilities** | Connect-Flash, Method-Override, ejs-mate |

---

## 📁 Project Structure

```
AIRBNBCLONE/
├── controllers/           # Route handler logic (MVC — Controller layer)
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── models/                # Mongoose schemas (MVC — Model layer)
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── routes/                # Express route definitions (thin connectors)
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── views/                 # EJS templates (MVC — View layer)
│   ├── includes/          # Reusable EJS partials (navbar, flash)
│   ├── layout/            # ejs-mate boilerplate layout
│   └── listings/          # Listing CRUD views
├── init/                  # Database seeding scripts
├── public/                # Static assets (CSS, JS, images)
├── utils/                 # ExpressError class, async wrapper
├── schema.js              # Joi validation schemas
├── app.js                 # App entry point, middleware config
└── package.json
```

---

## ⚙️ Setup Instructions

```bash
# 1. Install dependencies
npm install

# 2. Start MongoDB
mongod

# 3. Seed the database
node init/index.js

# 4. Start the server
node app.js
```

App runs at: `http://localhost:8080`

---

## 📅 Development Log

### 📆 March 18, 2026 — Project Initialization
- Initial project setup with Express and MongoDB
- Established database connection via Mongoose
- Designed Listing schema and seeded initial data

### 📆 March 19, 2026 — CRUD & Routing
- Implemented full CRUD operations for listings
- Built all EJS views (index, show, new, edit)
- Designed RESTful routes following REST conventions

### 📆 March 20, 2026 — UI & Responsiveness
- Integrated Bootstrap 5 for responsive layout
- Created reusable navbar, footer, and layout components via ejs-mate

### 📆 March 22, 2026 — Validation & UX
- Added server-side Joi validation middleware
- Integrated flash messaging for success and error states
- Centralized error handling with custom `ExpressError` class

### 📆 March 26, 2026 — Debugging Sprint
- Fixed route priority conflicts (specific routes before dynamic `:id` routes)
- Debugged Joi validation failures and data type mismatches

### 📆 March 27, 2026 — Reviews Integration
- Implemented nested routes for reviews (`/listings/:id/reviews`)
- Used `mergeParams: true` on review router
- Fixed undefined `req.params` issues in nested route context

### 📆 March 28, 2026 — Stability & Safety
- Fixed crashes caused by null/undefined reviews
- Added null-safe checks for DB operations
- Debugged routing flow edge cases

### 📆 March 30, 2026 — Sessions & Flash
- Implemented Express-Session for persistent login state
- Integrated Connect-Flash for session-based messaging
- Fixed middleware order issues (session must come before passport and flash)

### 📆 April 3, 2026 — Authentication Setup
- Implemented user Signup with hashed passwords via Passport-Local-Mongoose
- Integrated Passport.js with Local Strategy
- Configured session serialization/deserialization

### 📆 April 4, 2026 — Login, Logout & Route Protection
- Implemented login/logout functionality
- Built `isLoggedIn` middleware for protected routes
- Connected frontend auth UI with backend session system

### 📆 April 7, 2026 — Auth Deep Dive & Debugging
- Implemented redirect-after-login with `saveRedirectUrl` middleware
- Fixed `ERR_HTTP_HEADERS_SENT` — caused by missing `return` before `res.redirect()`
- Debugged Passport session flow and `req.user` lifecycle
- **Key Insight:** `req.user` only exists after successful login + active session; auth ≠ registration

### 📆 April 8, 2026 — Owner Integration & Relationships
- Added `owner` field (ObjectId ref to User) in Listing schema
- Auto-assigned `req.user._id` as owner on listing creation
- Used `populate("owner")` to fetch user details in listing show page
- Displayed owner info in EJS templates
- **Key Insight:** `populate()` works like a SQL JOIN — it replaces an ObjectId with the full referenced document at query time

### 📆 April 13, 2026 — Authorization for Listings & Reviews
- Implemented `isOwner` middleware — checks if `req.user._id` matches `listing.owner` before allowing edit/delete
- Implemented `isReviewAuthor` middleware — checks if `req.user._id` matches `review.author` before allowing delete
- Added `author` field (ObjectId ref to User) in Review schema
- Auto-assigned `req.user._id` as author on review creation
- Conditionally rendered Edit/Delete buttons in EJS — visible only to the respective owner/author
- Used `.equals()` for safe ObjectId comparison between `req.user._id` and stored references
- **Key Insight:** Authentication answers "who are you?" — Authorization answers "what are you allowed to do?"

### 📆 April 17, 2026 — MVC Architecture Refactor & Star Rating
- Refactored the entire codebase to follow the **MVC (Model-View-Controller)** design pattern
- Extracted all route handler logic from route files into dedicated controller files (`listing.js`, `review.js`, `user.js`) inside a new `controllers/` directory
- **Models layer** (Mongoose schemas) remains unchanged — already well-structured as the data layer
- **Views layer** (EJS templates) remains unchanged — already serving as the presentation layer
- **Routes** now act as thin connectors — they only map HTTP methods/paths to controller functions
- **Key Insight:** MVC separates concerns — Model handles data, View handles display, Controller handles business logic. This makes the codebase easier to maintain, test, and scale
- Implemented **interactive star rating** feature for the Reviews system
- Integrated [Starability CSS library](https://github.com/LunarLogic/starability) for accessible, animated star rating UI
- `rating` field (Number, 1–5) stored in Review schema and submitted via review form
- Star ratings are displayed on the listing detail page alongside each review
- **Key Insight:** UI-level interactivity (star selection) and data-level storage (rating field in DB) must be connected through the form `name` attribute — the value selected by the user is sent as part of the form body to the backend

---

## 🐛 Debugging Fixes

| Issue | Root Cause | Fix Applied |
|---|---|---|
| `ERR_HTTP_HEADERS_SENT` | `res.redirect()` called multiple times — missing `return` | Added `return res.redirect(...)` in middleware |
| Route not matching | Dynamic `:id` route shadowing specific routes | Reordered routes — specific before dynamic |
| Reviews showing undefined | `mergeParams` not set on review router | Set `mergeParams: true` on `express.Router()` |
| Null review crash | Accessing properties on null review objects | Added null-safety checks before DB operations |
| Session not persisting | Middleware loaded in wrong order | Moved session config above passport and flash init |
| ObjectId comparison failing | Comparing ObjectId to string directly | Used `.toString()` or `.equals()` for comparison |
| Unauthorized edit/delete access | No ownership check on protected routes | Added `isOwner` and `isReviewAuthor` middleware |

---

## ✅ Current Status

| Feature | Status |
|---|---|
| Full CRUD (Listings) | ✅ Complete |
| Reviews System | ✅ Complete |
| Authentication (Signup/Login/Logout) | ✅ Complete |
| Protected Routes | ✅ Complete |
| Redirect-after-login | ✅ Complete |
| Session Handling | ✅ Stable |
| Flash Messaging | ✅ Working |
| Error Handling | ✅ Structured |
| Owner ↔ Listing Relationship | ✅ Implemented |
| Authorization (Listings) | ✅ Complete |
| Authorization (Reviews) | ✅ Complete |
| MVC Architecture Refactor | ✅ Complete |

---

## 🎯 Next Goals

- [ ] **Image Upload** — integrate Cloudinary + Multer for listing photos
- [ ] **Map Integration** — Mapbox for listing location display
- [ ] **Review Authorization** — allow review authors to edit their own reviews
- [ ] **Deployment** — deploy to Render or Railway with MongoDB Atlas

---

## 🧠 Key Learnings

- Middleware execution order is critical — session → passport → flash → routes
- `req.user` lifecycle: only populated after login and an active session
- `populate()` in Mongoose is equivalent to a SQL JOIN — replaces ObjectId with a full document
- ObjectId is not a string — always use `.equals()` or `.toString()` for comparison
- `mergeParams: true` is required on child routers for nested route param access
- RESTful route design: nouns for resources, HTTP verbs for actions
- Always `return` after `res.redirect()` or `res.render()` to prevent double-response errors
- Authentication answers "who are you?" — Authorization answers "what are you allowed to do?"
- Always enforce authorization on both the **backend (middleware)** and **frontend (conditional rendering)**
- **MVC pattern** separates concerns cleanly — Controllers hold logic, Models hold data, Views hold display — making the codebase scalable and maintainable

---

## 👨‍💻 Author

**Tushar Panwar**  
2nd Year ECE | Full Stack Developer in Progress  
Apna College — Delta Batch
