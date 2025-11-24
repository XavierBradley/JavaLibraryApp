# Library Management System - React Frontend

Milestone 2 | Fall 2025 | Java Web Programming (420-N34-LA)

## Team
- Jose Santiago Arevalo Morales - Frontend Development & Documentation
- Xavier Bradley - Backend Development & Database

## Overview
React-based frontend for managing library authors and books, integrating with Spring Boot REST API and PostgreSQL database.

## Tech Stack
- React 18 + Vite
- React Router DOM
- Axios
- Spring Boot (Backend)
- PostgreSQL (Database)

## Features
✅ Authors & Books management (Create, Read, Update, Delete)  
✅ Pagination (5 records per page)  
✅ Search functionality  
✅ Modal forms with validation  
✅ Author details with related books  
✅ Professional UI with error handling  

## Local Setup
```bash
npm install
npm run dev
# Access at http://localhost:5173

Prerequisites: Node.js 16+, Backend running on localhost:8080

## Project Structure
src/
├── api/              # API service layer
├── components/       # Header, Footer, Menu, Modal
├── pages/            # Home, Authors, Books, About, Details
├── App.jsx           # Main app with routing
└── main.jsx          # Entry point

## API Endpoints
Authors: GET, POST, PUT, DELETE `/authors`, GET `/authors/{id}/books`  
Books: GET, POST, PUT, DELETE `/books`

## Validation Rules
- Author: Name (1-100 chars), Valid email, Biography (1-1000 chars)
- Book: Title (1-200 chars), Valid ISBN, Year (1000-2100), Author required

## Deployment
- Frontend: Netlify (pending)
- Backend: Render.com (Xavier)
- Database: Neon.com PostgreSQL (Xavier)

## Division of Work
Santiago: React components, pages, routing, API integration, UI/UX, validation, documentation  
Xavier: Spring Boot API, PostgreSQL setup, data seeding, backend deployment, CORS


Champlain College Saint-Lambert | Prof. Haikel Hichri