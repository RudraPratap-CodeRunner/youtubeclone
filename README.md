# 📘 YouTube Clone – Project Documentation

Note: Project is not copied. Project is running properly at my end.

Note: Run first backend as backend is connected to frontend. Both backend and frontend should run at terminal simaltaneously.

Video Link : https://www.loom.com/share/3bff7448a8d8493981d2dedeb8243cce
(please paste the link for recorded video of feature explaination)
GitHub Link : https://github.com/RudraPratap-CodeRunner/youtubeclone

COMMAND TO RUN FRONTEND:
    1. cd youtube-frontend
    2. npm install
    3. npm run dev

COMMAND TO RUN BACKEND:
    1. cd youtube-backend
    2. npm install
    3. npm run dev    

## 🧱 Tech Stack:
- **Frontend**: React, Tailwind CSS, React Router, Axios, react-icons
- **Backend**: Node.js, Express.js, MongoDB, Mongoose, JWT
- **Others**:  REST APIs

---

## 🔷 1. Frontend (React)

### 📁 Project Structure (Important Parts)
```
src/
├── App.jsx
├── Pages/
│   ├── Home.jsx
│   ├── HomePage.jsx
│   └── VideoPage.jsx
├── Components/
│   ├── Navbar.jsx
│   ├── TagsBar.jsx
│   ├── VideoCard.jsx
│   ├── CommentSection.jsx
│   └── AuthModal.jsx
```

### 🔑 Key Features
- **Video Listing**: Grid of videos on homepage, filterable by tags (categories).
- **Search Functionality**: Videos filtered via search query.
- **Tags Bar**: Horizontal scrollable tags to filter by category.
- **Video Watch Page**: Video details, description, comments, and recommendations.
- **Authentication Modal**: Login / Signup using email, username, and password.
- **Comment System**: Add, edit, delete comments (logged-in users only).
- **Channel Page**: View videos uploaded by a specific channel.
- **Responsive Design**: Built using Tailwind CSS utility classes.

### 📡 API Calls
- `/api/videos` → Get all videos.
- `/api/videos/:id` → Get single video.
- `/api/comments/:videoId` → Get comments for video.
- `/api/comments` (POST/PUT/DELETE) → Manage comments.
- `/api/auth/signup` → User registration.
- `/api/auth/login` → User login.
- `/api/users/me` → Get logged-in user details.

---

## 🔷 2. Backend (Node.js + Express)

### 📁 Project Structure
```
backend/
├── server.js
├── config/
│   └── db.js
├── models/
│   ├── User.js
│   ├── Video.js
│   └── Comment.js
├── routes/
│   ├── auth.js
│   ├── videos.js
│   ├── users.js
│   └── comments.js
├── controllers/
│   ├── authController.js
│   ├── videoController.js
│   ├── commentController.js
│   └── userController.js
├── middleware/
│   ├── authMiddleware.js
```

### 📌 API Endpoints

#### 🔐 Authentication
| Method | Route            | Description            |
|--------|------------------|------------------------|
| POST   | `/api/auth/signup` | Register new user     |
| POST   | `/api/auth/login`  | Login existing user   |

#### 👤 User
| Method | Route             | Description         |
|--------|-------------------|---------------------|
| GET    | `/api/users/me`    | Get current user    |

#### 📹 Videos
| Method | Route             | Description         |
|--------|-------------------|---------------------|
| GET    | `/api/videos`      | Get all videos      |
| GET    | `/api/videos/:id`  | Get video by ID     |
| POST   | `/api/videos`      | Upload video        |
| PUT    | `/api/videos/:id`  | Edit video (owner)  |
| DELETE | `/api/videos/:id`  | Delete video (owner)|

#### 💬 Comments
| Method | Route                      | Description              |
|--------|----------------------------|--------------------------|
| GET    | `/api/comments/:videoId`    | Get comments for video   |
| POST   | `/api/comments`             | Add a comment            |
| PUT    | `/api/comments/:commentId`  | Edit a comment (owner)   |
| DELETE | `/api/comments/:commentId`  | Delete a comment (owner) |

---

## 🛠️ Setup Instructions

### 🔧 Backend


`.env` file example:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 🔧 Frontend



Axios base URL (frontend):
```js
axios.defaults.baseURL = 'http://localhost:5000';
```

---

## 🔐 Auth Flow
- JWT is generated on login/signup.
- Stored in localStorage.
- Axios adds token to headers for protected routes.

---

## ✅ Features Completed
- [x] Video upload + listing
- [x] User signup & login with JWT
- [x] Video watch page with description and comments
- [x] Comment system (add/edit/delete)
- [x] Filter by tags and search
- [x] Channel page (user's videos)
- [x] Responsive UI with Tailwind CSS

---


