# Real-Time Water Treatment Plant Monitoring and Alert System

A MERN full-stack application for clear, operator-friendly monitoring of a simulated water treatment plant. The system receives monitoring data through simulated or externally provided sources. The current implementation focuses on the full-stack web application; real IoT sensor integration is future scope.

## Features

- JWT authentication with bcrypt password hashing and admin/operator roles
- Dashboard with current pH, turbidity, temperature, level, flow, and pump status
- Start/stop simulation, normal readings, and intentionally abnormal readings
- Database-backed threshold engine and automatic warning/critical alerts
- Alert acknowledgement, monitoring history, analytics charts, and print reports
- Admin-only threshold management and profile view
- Responsive desktop, tablet, and mobile interface

## Stack and structure

`frontend/` is a Vite React application using React Router, Axios, Recharts, and CSS. `backend/` is an Express REST API using Mongoose, MongoDB, JWT, and bcrypt.

```text
backend/   models, routes, middleware, services, server.js
frontend/  React pages and components in src/App.jsx, API client, styles
 docs/     architecture, use-case, and ER Mermaid sources
```

## Requirements

- Node.js 20+ and npm
- MongoDB running locally or a MongoDB connection string

## Setup

1. Start MongoDB and create a backend environment file from `backend/.env.example`.
2. Install and start the API:

```powershell
cd backend
npm install
npm run dev
```

3. In another terminal, create `frontend/.env` from `frontend/.env.example`, then run:

```powershell
cd frontend
npm install
npm run dev
```

Open `http://localhost:5173`. The first registered account becomes an administrator; later registrations are operators.

## Environment variables

Backend: `PORT=5000`, `MONGO_URI=mongodb://127.0.0.1:27017/water_treatment_monitoring`, `JWT_SECRET=...`, and `CLIENT_URL=http://localhost:5173`. Frontend: `VITE_API_URL=http://localhost:5000/api`.

## Demo flow

Register, sign in, use **Generate normal** or **Generate abnormal** on the dashboard, acknowledge the resulting alert, inspect Monitoring history, Analytics, and Reports, then update thresholds as the administrator. Start simulation to generate a normal reading every five seconds and stop it at any time.

## API overview

Auth: `/api/auth/register`, `/login`, `/me`. Monitoring: `/api/monitoring`, `/latest`, `/:id`. Alerts: `/api/alerts`, `/recent`, `/unresolved`, `/:id/acknowledge`. Thresholds: `/api/thresholds` and `PUT /:parameter`. Analytics: `/api/analytics`. Full examples are in [API_DOCUMENTATION.md](API_DOCUMENTATION.md).

## Future scope

Real IoT sensor integration, cloud deployment, mobile clients, notifications, machine-learning anomaly detection, predictive maintenance, streaming transport, multi-plant support, and expanded roles.
