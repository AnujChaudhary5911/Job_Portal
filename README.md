# 🎯 Job Portal

A full-stack job portal application that connects job seekers (candidates) with recruiters. Candidates can search and apply for jobs, while recruiters can post job listings and manage applications.

## 📋 Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Running the Application](#running-the-application)
- [API Routes](#api-routes)
- [Database Models](#database-models)
- [Configuration](#configuration)
- [Contributing](#contributing)

## ✨ Features

### For Candidates:
- ✅ User registration and secure login
- ✅ Complete profile management (education, skills, experience)
- ✅ Browse and search job listings with filters
- ✅ Apply for jobs
- ✅ Save jobs for later viewing
- ✅ View applied jobs and saved jobs in dashboard
- ✅ Delete applications or saved jobs

### For Recruiters:
- ✅ User registration and secure login
- ✅ Post new job listings
- ✅ View all applicants for posted jobs
- ✅ Review candidate profiles
- ✅ Accept or reject candidates
- ✅ Edit posted job listings
- ✅ Delete job postings
- ✅ Dedicated recruiter dashboard

## 🛠 Tech Stack

### Backend:
- **Runtime:** Node.js with ES6+ modules
- **Framework:** Express.js 5.2.1
- **Database:** MongoDB with Mongoose 9.4.1
- **Authentication:** Express-session with bcrypt password hashing
- **Email Service:** Nodemailer 8.0.7
- **Security:** Helmet.js for HTTP security headers
- **CORS:** Cross-Origin Resource Sharing enabled
- **Environment:** dotenv for configuration management

### Frontend:
- **Template Engine:** EJS 5.0.1
- **Styling:** CSS (in public directory)
- **Client-side Logic:** JavaScript

## 📁 Project Structure
