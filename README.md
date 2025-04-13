# MemoTag - AI-Powered Dementia Care Platform

![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)

**MemoTag** is an innovative AI-powered platform designed to transform dementia care by helping patients maintain independence and connection through personalized memory assistance.  
This repository contains a modern, responsive one-page website that showcases the MemoTag platform, its features, and its benefits.

![MemoTag Screenshot](https://github.com/user-attachments/assets/6892fb2b-e314-4847-a2c0-e91a41d1b5a2)

---

## ✨ Features

- **Modern UI/UX** – Clean, human-centered design with Tailwind CSS  
- **Responsive Design** – Optimized for all devices from mobile to desktop  
- **Dark Mode** – Toggle between light and dark themes  
- **Smooth Animations** – Engaging micro-interactions using Framer Motion  
- **Interactive Elements** – Custom cursor, scroll animations  
- **Contact Form** – Backend integration with PostgreSQL  
- **Waitlist Signup** – Capture user info in PostgreSQL  

---

## 🛠️ Tech Stack

### Frontend
- React.js  
- Tailwind CSS  
- Framer Motion


### Backend
- Node.js / Express  
- RESTful API  
- PostgreSQL  
- Render (cloud hosting)  

---

## 📁 Project Structure

client/ # React frontend
server/ # Express backend

yaml
Copy
Edit

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14+)  
- npm (v6+)

---

### 📦 Installation

⚛️ Frontend Setup
bash
Copy
Edit
cd client
npm install
npm run dev
```
Open: http://localhost:5173

🖥️ Backend Setup
bash
Copy
Edit
cd server
npm install
Create a .env file:

env
Copy
Edit
PORT=5000
DATABASE_URL=postgresql://memotag_user:password@hostname/database_name
Replace the DATABASE_URL with your actual PostgreSQL connection string from Render.

Start the server:

bash
Copy
Edit
npm run dev
API runs at: http://localhost:5000

🧠 PostgreSQL Setup (on Render)
Log in to render.com

Click New → PostgreSQL

Set name, region, and plan

Copy your connection string

Paste it in .env under DATABASE_URL

Server will auto-create necessary tables on start

💻 Core Components
1. Hero Section
Headline + CTA + animated visuals

Waitlist form

2. Problem Section
Dementia stats

Scroll-triggered animations

3. Solution Section
“How MemoTag Works” explanation

Feature cards

4. Traction Section
Metrics + testimonials + logos

5. Contact Section
Demo request form

User-type selector

Success/error handling

🔧 Key Implementation Details
✨ UI Effects
Custom cursor with trail

Scroll-triggered animations

Hover transitions

📱 Responsiveness
Mobile-first design

Layouts for all screen sizes

🌙 Dark Mode
Detects system preference

Manual toggle

⚡ Performance
Optimized assets

Clean animation logic

Efficient state + event cleanup

🚀 Deployment
MemoTag is optimized for deployment using Vercel (for the frontend) and Render (for the backend and database).

🗄️ Backend Deployment (Render)
Push your code to GitHub.

Go to Render, click "New" → "Web Service".

Connect your GitHub repo and configure the service:

Root Directory: server

Environment: Node

Build Command: npm install

Start Command: node server.js

Add Environment Variables:

env
Copy
Edit
PORT=5000
DATABASE_URL=your_postgresql_connection_url
🌐 Frontend Deployment (Vercel)
Update the .env.production file with your backend Render API URL.

Push your frontend code (client folder) to GitHub.

Go to Vercel and import your project.

Configure the project:

Framework Preset: Vite

Root Directory: client

Deploy!

✅ Final Notes
Ensure CORS is handled correctly between frontend and backend.

Secure your environment variables.

Test your live endpoints and forms after deployment.

<p align="center"> Developed with ❤️ for <strong>MemoTag</strong> </p> ```
