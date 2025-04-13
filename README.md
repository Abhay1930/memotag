# MemoTag - AI-Powered Dementia Care Platform

<p align="center">
  <img src="https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
</p>

MemoTag is an innovative AI-powered platform designed to transform dementia care by helping patients maintain independence and connection through personalized memory assistance. This repository contains a modern, responsive one-page website that showcases the MemoTag platform, its features, and benefits.

## 🌟 Live Demo

- Frontend: [https://memotag.vercel.app](https://memotag-chi.vercel.app/)


## ✨ Features

- **Modern UI/UX**: Clean, human-centered design with Tailwind CSS
- **Responsive Design**: Optimized for all devices from mobile to desktop
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: Engaging micro-interactions using Framer Motion
- **Interactive Elements**: Custom cursor with trail effect, scroll animations
- **Contact Form**: Backend integration for form submissions with PostgreSQL storage
- **Waitlist Signup**: Capture interested users' information in PostgreSQL database

## 🛠️ Tech Stack

### Frontend
- **React.js**: Component-based UI development
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Framer Motion**: Animation library for smooth transitions and effects
- **Vite**: Next-generation frontend tooling

### Backend
- **Node.js/Express**: Server for handling form submissions
- **RESTful API**: Endpoints for contact form and waitlist signup
- **PostgreSQL**: Database for storing contact form and waitlist entries
- **Render**: Cloud hosting for PostgreSQL database and backend API

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- PostgreSQL database

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/memotag.git
cd memotag
```

2. Frontend Setup:
```bash
cd client
npm install
npm run dev
```

3. Backend Setup:
```bash
cd server
npm install
```

4. Create `.env` file in server directory:
```env
PORT=5000
DATABASE_URL=your_postgresql_connection_string
```

5. Start the backend:
```bash
npm run dev
```

## 📁 Project Structure

```
memotag/
├── client/                 # React frontend
│   ├── public/            # Static files
│   ├── src/               # Source files
│   └── package.json       # Frontend dependencies
└── server/                # Express backend
    ├── server.js          # Main server file
    └── package.json       # Backend dependencies
```

## 🌐 API Endpoints

### Contact Form
```http
POST /api/contact
```
Body:
```json
{
  "name": "string",
  "email": "string",
  "message": "string",
  "userType": "string"
}
```

### Waitlist
```http
POST /api/waitlist
```
Body:
```json
{
  "email": "string",
  "userType": "string"
}
```

## 🚀 Deployment

### Frontend (Vercel)
1. Connect your GitHub repository
2. Set environment variables:
   - `VITE_API_URL`: Your Render backend URL

### Backend (Render)
1. Create a new Web Service
2. Connect your GitHub repository
3. Set environment variables:
   - `DATABASE_URL`: Your PostgreSQL connection string



## 👥 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

MAil - [thakurabhay975@gmail.com](mailto:thakurabhay975@gmail.com)

Project Link: [https://github.com/Abhay1930/memotag](https://github.com/Abhay1930/memotag)

---

<p align="center">Made with ❤️ for MemoTag</p>
