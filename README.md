# AI Interview Strategy

An AI-powered full-stack application that helps candidates prepare for interviews with role-specific strategy, likely interview questions, skill-gap analysis, and a personalized preparation roadmap.

Live demo: [https://interview-ai-web.onrender.com/](https://interview-ai-web.onrender.com/)

## Why This Project Stands Out

Most interview prep tools stop at generic tips. This application takes the job description plus the candidate's profile and turns it into a practical, personalized interview plan.

It helps users:

- upload a resume or provide a quick self-summary
- paste a target job description
- generate a role-specific interview strategy
- get technical and behavioral interview questions with intent and answer guidance
- identify skill gaps with severity levels
- receive a day-wise preparation roadmap
- generate a tailored resume PDF
- save and revisit previous interview reports

## Product Highlights

- Authentication system with protected routes
- Resume upload support
- AI-generated interview report structured into reusable sections
- Match score for candidate-role fit
- Behavioral and technical question breakdown
- Personalized preparation plan
- Resume PDF generation
- Persistent report history per user
- Responsive UI deployed publicly on Render

## Tech Stack

### Frontend

- React 19
- React Router
- Axios
- Sass
- Vite

### Backend

- Node.js
- Express
- MongoDB with Mongoose
- JWT-based authentication
- Multer for file upload
- Puppeteer for PDF generation
- Zod for response validation

### AI

- Google Gemini API

## Architecture

This project is structured as a monorepo with separate frontend and backend apps:

```text
Backend/   -> Express API, auth, database, AI orchestration
Frontend/  -> React client, auth flow, report generation UI
```

## Core User Flow

1. User registers or logs in
2. User pastes a job description
3. User uploads a resume or writes a self-description
4. The backend extracts content and sends a structured prompt to Gemini
5. The app generates:
   - match score
   - technical questions
   - behavioral questions
   - skill gaps
   - day-wise preparation plan
6. User can revisit saved reports and download an AI-tailored resume PDF

## What I Built

This project demonstrates my ability to:

- build and deploy a complete full-stack product
- design and ship authenticated user flows
- integrate third-party AI services into a production-style app
- handle file uploads and server-side PDF generation
- work with structured backend validation and persistent data models
- debug real deployment issues across frontend, backend, CORS, auth, and hosting
- deploy a monorepo application to Render with separate frontend and backend services

## Technical Challenges Solved

- Cross-origin deployment between frontend and backend on Render
- Persistent authentication in production
- Protected routes and session restoration
- Multipart resume upload flow
- AI response normalization using Zod schemas
- Render Blueprint deployment for monorepo services
- Resume PDF generation using Puppeteer on the backend

## Local Development

### 1. Clone the repository

```bash
git clone https://github.com/Amitkumar989/ai-interview-strategy.git
cd ai-interview-strategy
```

### 2. Backend setup

```bash
cd Backend
npm install
```

Create a `.env` file in the project root or configure the backend environment with:

```env
PORT=5000
NODE_ENV=development
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
GEMINI_MODEL=gemini-2.5-flash
CORS_ORIGINS=http://localhost:5173
```

Run the backend:

```bash
npm run dev
```

### 3. Frontend setup

```bash
cd ../Frontend
npm install
```

Create a frontend env file:

```env
VITE_API_URL=http://localhost:5000
```

Run the frontend:

```bash
npm run dev
```

## Deployment

This project is deployed on Render using separate services for:

- Backend API
- Frontend static site

Render configuration is included in:

- [render.yaml](./render.yaml)
- [DEPLOY_RENDER.md](./DEPLOY_RENDER.md)

## API Overview

### Auth

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/logout`
- `GET /api/auth/get-me`

### Interview Reports

- `POST /api/interview/`
- `GET /api/interview/`
- `GET /api/interview/report/:interviewId`
- `POST /api/interview/resume/pdf/:interviewReportId`

## Screens This App Includes

- Registration and login
- Dashboard for generating interview strategies
- Recent saved reports
- Detailed interview report view
- Resume PDF download flow

## Live Project

Frontend: [https://interview-ai-web.onrender.com/](https://interview-ai-web.onrender.com/)

## About Me

I built this project to solve a practical problem: most candidates know they need to prepare better, but they do not have a system for converting a job description into an actual interview plan. This app turns that gap into a workflow.

If you're evaluating me for software engineering roles, this project reflects my ability to own product development end-to-end, from UI and backend architecture to AI integration, debugging, and deployment.
