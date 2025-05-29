
# ⚽ SportsOrca Assignment

**SportsOrca Assignment** is a modern MERN stack web app that displays upcoming **soccer matches** using the ScoreBat public video API. It features a clean **black-and-white theme**, stylish UI, and infinite scrolling for a seamless user experience.

![SportsOrca Logo](https://res.cloudinary.com/dkoqcp1g9/image/upload/v1748495222/SportsOrca-Logo_cp4woj.png)

---

## 🚀 Features

- ⚽ Displays the latest soccer match highlights
- 🌓 Sleek black background with white text
- 💠 Blue border and text on hover
- 🔄 Infinite scrolling (15 matches loaded at a time)
- 📱 Fully responsive and mobile-friendly
- 🔗 Professional top bar with:
  - Social icons (Facebook, Twitter/X, Instagram)
  - Center-aligned logo
  - “Subscribe Now” button

---

## 🛠️ Tech Stack

| Layer      | Technology             |
|------------|------------------------|
| Frontend   | React.js, TailwindCSS, Axios |
| Backend    | Node.js, Express.js    |
| API        | [ScoreBat Video API](https://www.scorebat.com/video-api/v3/) |
| Styling    | Tailwind CSS           |

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/vinayak0603/sportsorcaAssignment.git
cd sportsorcaAssignment
```

---

### 2. Setup Backend

```bash
cd backend
npm install
npm start
```

- Runs at: `http://localhost:5000`
- Endpoint: `GET /api/soccer`

---

### 3. Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

- Runs at: `http://localhost:5173` (or whatever Vite assigns)

---

## 🧠 Project Structure

```
sportsorca/
├── backend/
│   ├── index.js          # Express API server
│   └── ...
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── components/
│   │   │   └── TopBar.jsx
│   │   └── assets/
│   │       └── logo.png
│   └── ...
├── README.md
```

---

## 🔗 API Endpoint

### `/api/soccer`

- Method: `GET`
- Description: Fetches recent soccer match highlights from the ScoreBat video API.
- Response:  
```json
[
  {
    "title": "Team A vs Team B",
    "date": "2025-05-28",
    "teams": "Team A vs Team B"
  },
  ...
]
```

---

## ✨ UI Highlights

- 🖤 Black background
- 🤍 White primary text
- 🔵 Blue hover effects on match list
- 🧭 Fixed stylish top bar
- 🧩 Infinite scrolling using `IntersectionObserver`

---

## 🔮 Future Enhancements

- Add basketball and other sports
- Add team logos
- Favorite matches functionality
- Authentication and user profiles

---

## 👨‍💻 Author

Made with ❤️ by [Vinayak Andhere]

---

## 📄 Live Link

https://sportsorca.netlify.app/

---
