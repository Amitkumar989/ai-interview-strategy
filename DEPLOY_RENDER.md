# Render Deployment

This project is set up to deploy as two Render services:

1. `interview-ai-api`
   Type: Web Service
   Root directory: `Backend`

2. `interview-ai-web`
   Type: Static Site
   Root directory: `Frontend`

## Backend environment variables

Set these in Render for the web service:

- `NODE_ENV=production`
- `PORT=10000`
- `MONGO_URI=...`
- `JWT_SECRET=...`
- `GEMINI_API_KEY=...`
- `GEMINI_MODEL=gemini-2.5-flash`
- `CORS_ORIGINS=https://your-frontend-name.onrender.com`

## Frontend environment variables

Set this in Render for the static site:

- `VITE_API_URL=https://your-backend-name.onrender.com`

## Notes

- The backend now exposes `GET /api/health` for Render health checks.
- Auth cookies are production-safe for cross-site frontend/backend hosting on Render.
- The static site includes a rewrite rule so React routes work after refresh.
- After your frontend Render URL is created, update the backend `CORS_ORIGINS` to match it exactly.
