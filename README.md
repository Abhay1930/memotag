MemoTag - AI-Powered Dementia Care Platform
<p align="center"> <img src="https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" /> <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" /> <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" /> <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" /> </p>
MemoTag is an innovative AI-powered platform designed to transform dementia care by helping patients maintain independence and connection through personalized memory assistance.
This repository contains a modern, responsive one-page website that showcases the MemoTag platform, its features, and its benefits.

<p align="center"> <img src="https://github.com/user-attachments/assets/6892fb2b-e314-4847-a2c0-e91a41d1b5a2" width="800" alt="MemoTag Screenshot" /> </p>
✨ Features
Modern UI/UX: Clean, human-centered design with Tailwind CSS

Responsive Design: Optimized for all devices, from mobile to desktop

Dark Mode: Toggle between light and dark themes

Smooth Animations: Engaging micro-interactions using Framer Motion

Interactive Elements: Custom cursor with trail effect and scroll animations

Contact Form: Backend integration with PostgreSQL for form submissions

Waitlist Signup: Capture interested users' information into PostgreSQL

🛠️ Tech Stack
Frontend
React.js – Component-based UI development

Tailwind CSS – Utility-first CSS framework

Framer Motion – Smooth transitions and animation effects

Backend
Node.js / Express – Handles form submissions and backend logic

RESTful API – Manages contact form and waitlist endpoints

PostgreSQL – Stores contact and waitlist data

Render – Cloud hosting for backend and database

📋 Project Structure
client/ – React.js frontend

server/ – Express.js backend

🚀 Getting Started
Prerequisites
Node.js (v14 or higher)

npm (v6 or higher)

Installation
Clone the repository

bash
Copy
Edit
git clone https://github.com/yourusername/memotag.git
cd memotag
Frontend Setup
bash
Copy
Edit
cd client
npm install
npm run dev
Frontend runs at: http://localhost:5173 (or 5174 if 5173 is occupied)

Backend Setup
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
⚠️ Replace DATABASE_URL with your actual connection string from Render.

Start backend:

bash
Copy
Edit
npm run dev
Backend runs at: http://localhost:5000

🧩 PostgreSQL Database Setup
Go to render.com

Create a new PostgreSQL instance

Copy the External/Internal URL, username, and password

Update your .env file with the proper database URL

The server auto-creates necessary tables on startup.

💻 Core Components
1. Hero Section
Catchy headline, CTA, animated visuals, waitlist form

2. Problem Section
Dementia stats, real-world challenges, scroll animations

3. Solution Section
Step-by-step explanation, interactive feature cards

4. Traction Section
Metrics, testimonials, partner logos

5. Contact Section
Form with user-type selection, success/error feedback

🔥 Key Implementation Details
✨ Interactive Elements
Custom Cursor with trailing effect

Scroll Animations triggered on visibility

Hover Effects on cards and buttons

📱 Responsive Design
Mobile-first, adaptive layouts

Optimized assets for all screen sizes

🌙 Dark Mode
Syncs with system preferences

Manual toggle in navbar

⚡ Performance Optimization
Lightweight animations

Efficient state handling

Event listener cleanup

🌍 Deployment
Frontend → Vercel
Backend + DB → Render

Backend Deployment (Render)
Create new Web Service

Root Directory: server

Build Command: npm install

Start Command: node server.js

Add environment variables:

PORT=5000

DATABASE_URL=...

Frontend Deployment (Vercel)
Update .env.production with backend URL

Deploy using Vite + React setup

Root Directory: client

<p align="center"> Developed with ❤️ for MemoTag </p>
