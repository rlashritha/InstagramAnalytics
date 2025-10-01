> **Note:** As I'm from the ENTC branch (which you allowed later), I got to know about this assignment format just a day before submission.  
> Hence, I have used **static data** for now. After submission, I will be working on **tags generation and vibe analysis for posts**.  
> The project is built using **Next.js + TypeScript** for both frontend and backend.

# 📸 Instagram Influencer Profile – Full Stack Assignment  

A full-stack web application that showcases an Instagram influencer’s profile, posts, analytics, and insights.  
Built with **Next.js + TypeScript** to demonstrate frontend, backend, and data handling capabilities.  

---

## 🚀 Features Implemented  

### 👤 Influencer Profile  
- Name, Username (@handle), Profile Picture  
- Followers, Following, Posts count  

### 📊 Engagement & Analytics  
- Average likes per post  
- Average comments per post  
- Engagement rate (%)  

### 🖼️ Post-Level Data  
- Recent posts with:  
  - Thumbnail image  
  - Caption text  
  - Likes & Comments count  
- Planned Feature: **Tag generation & vibe analysis (using ML/image processing)**  

### 🎥 Reels Data *(Planned)*  
- Structure ready for Reels (views, likes, comments)  
- Future scope: Object/event detection in reels  

### 📈 Visualizations  
- Engagement metrics displayed in a clean, responsive UI  
- Charts for likes/comments trends  

---

## 🛠️ Tech Stack  

**Frontend:**  
- Next.js (React Framework)  
- TypeScript  
- Tailwind CSS (for responsive, modern UI)  

**Backend:**  
- Next.js API Routes (serverless functions)  
- Static data mocked as API responses (due to time limitation)  

**Data Handling (Planned Enhancements):**  
- Scraping with Puppeteer / Instaloader  
- Image & Video Processing (OpenCV / TensorFlow / Gemini API for tags)  
- Database: MongoDB / PostgreSQL (to replace static JSON)  

---

## 📂 Project Structure  

├── public
├── src
│ ├── app
│ │ ├── influencer/
│ │ ├── globals.css
│ │ ├── layout.tsx
│ │ └── page.tsx
│ ├── component
│ │ ├── Demographics.tsx
│ │ ├── EngagementAnalytics.tsx
│ │ ├── HomepageHeader.tsx
│ │ ├── InfluencerCard.tsx
│ │ ├── InfluencerProfileCard.tsx
│ │ ├── InsightHeader.tsx
│ │ ├── LikesCommentsTrendChart.tsx
│ │ ├── RecentPosts.tsx
│ │ └── ReelsCarousel.tsx
│ ├── data
│ │ ├── demographics.ts
│ │ ├── influencers.ts
│ │ ├── likesCommentsChart.ts
│ │ ├── posts.ts
│ │ └── reels.ts
│ └── utils
│ └── analytics.ts
├── .gitignore
├── next-env.d.ts
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
└── README.md


---

## 📋 How to Run  

### 1️⃣ Clone Repo  
```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>

2️⃣ Install Dependencies
npm install

3️⃣ Run Dev Server
npm run dev


App will be live at  http://localhost:3000

## 💡 Future Enhancements  

- 🔄 **Instagram Scraping Pipeline** – Build a real-time scraper using Puppeteer/Instaloader to fetch live influencer data.  
- 🗄️ **Database Integration** – Replace static JSON with MongoDB/PostgreSQL for persistent storage and queries.  
- 🖼️ **AI-Powered Post Analysis** – Use OpenCV/TensorFlow/Gemini API for:  
  - Auto-tag generation from images  
  - Vibe/ambience classification (casual, aesthetic, luxury, etc.)  
  - Quality indicators (lighting, clarity, visual appeal)  
- 🎥 **Video/Reels Analysis** – Detect objects/events in reels (e.g., "beach", "dance", "food review") and classify ambience.  
- 📊 **Audience Demographics Dashboard** – Infer and visualize gender split, age groups, and geographic distribution of audience.  
- 📈 **Advanced Analytics** – Add deeper insights like engagement trends over time, content category distribution, and reach estimations.  
- 🌐 **Deployment** – Host the app on Vercel/Netlify for frontend and Render/Heroku for backend with connected database.  
