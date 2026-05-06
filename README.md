# ResuMy — IT ATS Matcher & Skill Gap Analyzer

ResuMy is a web-based platform designed to help IT job seekers improve their resume quality for Applicant Tracking System (ATS) screening. The application compares a candidate's CV with a job description, generates an ATS match score, identifies matched and missing skills, and provides improvement recommendations.

This project is developed as part of the Coding Camp 2026 Capstone Project powered by DBS Foundation.

---

## 📌 Project Overview

Many IT candidates have relevant skills but fail during the early recruitment screening stage because their CV does not match the keywords, structure, or required skills in the job description.

ResuMy helps users answer three key questions:

1. How well does my CV match a specific job description?
2. What skills already match the job requirements?
3. What skills are missing and need improvement?

---

## 🎯 Main Features

### 1. ATS Match Scoring

Analyze the similarity between a CV and a job description, then generate an ATS match score from 0–100.

### 2. Skill Gap Analyzer

Identify skills that are already matched and skills that are missing from the candidate's CV.

### 3. Resume Analysis Result

Display analysis results in a simple and readable dashboard, including:

- ATS match score
- Match status
- Matched skills
- Missing skills
- Improvement recommendations

### 4. Result History

Store and display previous resume analysis results using a database.

### 5. IT Skill Trend Dashboard

Provide insights into trending IT skills based on job vacancy data.

---

## 🧩 MVP Scope

For the current development phase, the focus is on:

- UI/UX design
- Frontend setup
- RESTful API setup
- Database setup
- Dummy analysis response
- Frontend and backend integration

The AI model integration, deployment, CV Builder, and AI Roadmap Generator are planned for the next development phase.

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- Tailwind CSS
- React Router
- Axios

### Backend

- Node.js
- Express.js
- RESTful API

### Database

- PostgreSQL / MongoDB

### AI Service

- FastAPI
- TensorFlow
- Siamese Network
- Named Entity Recognition

### Data Dashboard

- Python
- Pandas
- Streamlit

---

## 📁 Project Structure

```txt
ResuMy/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
