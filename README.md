# MemoTag - AI-Powered Dementia Care Platform

<p align="center">
  <img src="https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
</p>

MemoTag is an innovative AI-powered platform designed to transform dementia care by helping patients maintain independence and connection through personalized memory assistance. This repository contains a modern, responsive one-page website that showcases the MemoTag platform, its features, and benefits.

<p align="center">
  <img src="client/public/screenshot.png" alt="MemoTag Website Screenshot" width="800" />
</p>

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

### Backend
- **Node.js/Express**: Server for handling form submissions
- **RESTful API**: Endpoints for contact form and waitlist signup
- **PostgreSQL**: Database for storing contact form and waitlist entries
- **Render**: Cloud hosting for PostgreSQL database and backend API

## 📋 Project Structure

This project consists of two main parts:

- `client/`: React.js frontend with Tailwind CSS and Framer Motion
- `server/`: Express.js backend for form handling

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/memotag.git
   cd memotag
   ```

### Frontend Setup

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. The frontend will be available at http://localhost:5173 (or http://localhost:5174 if port 5173 is in use)

### Backend Setup

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file with the following content:
   ```
   PORT=5000
   DATABASE_URL=postgresql://memotag_user:password@hostname/database_name
   ```

   Note: Replace the DATABASE_URL with your actual PostgreSQL connection string from Render.

4. Start the development server:
   ```bash
   npm run dev
   ```

5. The backend API will be available at http://localhost:5000

### Running Both Frontend and Backend

You'll need to run both the frontend and backend servers simultaneously in separate terminal windows to have the full application working.

### PostgreSQL Database Setup

1. Create a PostgreSQL database on Render:
   - Go to [render.com](https://render.com) and sign up/login
   - Click "New" and select "PostgreSQL"
   - Configure your database with a name, region, and plan
   - Click "Create Database"

2. Once created, Render will provide you with:
   - Internal Database URL
   - External Database URL
   - Username and password

3. Update your server's `.env` file with the database connection string:
   ```
   DATABASE_URL=postgresql://username:password@hostname/database_name
   ```

4. The server will automatically create the necessary tables when it starts up.

## 💻 Core Components

### 1. Hero Section
- Clean headline with CTA button
- Animated visuals with Framer Motion
- Waitlist signup form

### 2. Problem Section
- Statistics on dementia and memory care challenges
- Visual representation of the problem
- Scroll-triggered animations

### 3. Solution Section
- "How MemoTag Works" with step-by-step explanation
- Interactive feature cards
- Visual aids for better understanding

### 4. Traction Section
- Key metrics and statistics
- Testimonial from healthcare professional
- Partner logos

### 5. Contact Section
- Form for demo requests and inquiries
- User type selection for better lead qualification
- Success/error message handling

## 🔥 Key Implementation Details

### Interactive UI Elements
- **Custom Cursor with Trail**: A unique cursor follower with trailing circles that adds a modern touch to the user experience
- **Scroll-Triggered Animations**: Elements that animate into view as the user scrolls down the page
- **Hover Effects**: Subtle animations on interactive elements like buttons and cards

### Responsive Design
- Mobile-first approach with Tailwind CSS
- Tailored layouts for different screen sizes
- Optimized images and assets

### Dark Mode
- System preference detection
- Manual toggle in the navbar
- Consistent styling across both themes

### Performance Optimization
- Optimized animations for better performance
- Efficient state management
- Proper cleanup of event listeners

## 🚀 Deployment

### Recommended: Vercel (Frontend) + Render (Backend + Database)

This project is optimized for deployment with Vercel for the frontend and Render for the backend and database:

1. **Database Setup**:
   - Create a PostgreSQL database on Render as described in the PostgreSQL Database Setup section

2. **Backend Deployment**:
   - Push your code to a GitHub repository
   - In the Render dashboard, click "New" and select "Web Service"
   - Connect your GitHub repository
   - Configure the service:
     - Root Directory: `server` (if your Express code is in a server folder)
     - Environment: `Node`
     - Build Command: `npm install`
     - Start Command: `node server.js`
   - Add environment variables:
     - `PORT`: 5000
     - `DATABASE_URL`: Use the Internal Database URL from your PostgreSQL instance
   - Click "Create Web Service"

3. **Frontend Deployment**:
   - Update the `.env.production` file with your Render backend URL
   - Push your code to GitHub
   - Connect your repository to Vercel
   - Configure the build settings:
     - Framework Preset: Vite
     - Root Directory: `client`
   - Deploy the project

<p align="center">
Developed with ❤️ for MemoTag
</p>