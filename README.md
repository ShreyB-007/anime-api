# Anime Quote & News Site 🧠📺t

This is a capstone project where I built a website that fetches and displays data from public APIs using backend skills I've learned.

## 🛠️ Tech Stack

This project uses:

* **Node.js** and **Express.js** to set up the backend server
* **Axios** for making HTTP requests to external APIs
* **EJS** as a templating engine for rendering dynamic views
* Basic **HTML/CSS/Bootstrap** to structure and style the frontend
* XML parsing via **xml2js** for handling RSS feeds

## 🌐 What This Project Does

I chose two anime-based public APIs to build something both fun and functional:

### 🔮 AnimeChan API

* Fetches a **random anime quote** every time the user refreshes the page.
* Displays the quote with the **character** and **anime name**, wrapped in a clean glowing UI.
* A random **background image** enhances the vibe.

### 📰 AnimeNewsNetwork API

* Parses their RSS XML feed and shows **one random recent news item** about anime.
* Handles XML parsing properly and extracts the news **title**, **description**, **source**, and **timestamp**.
* Refreshing the page rotates the news.

### ⚠️ Error Handling

* If something breaks (like rate limits from AnimeChan), the site **doesn't crash** — instead, a helpful message is shown to the user.

## 📦 Features

* Clean, responsive UI
* Ambient glowing quote container
* Functional footer with socials
* Follows good dev practices (modular code, error handling, alt texts, etc.)

## 🚀 How to Run This Project

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
npm install
node index.js
```

Then head over to [http://localhost:3000](http://localhost:3000) in your browser.

---

## ⚠️ Important Note

The **AnimeChan API** has a **rate limit of \~5 requests per hour**. If you're trying to test or experiment with the project repeatedly, it's recommended to use a **VPN** to bypass the restriction and avoid hitting the limit.

---

Built with caffeine, frustration, and way too much console.log debugging. 🌚
