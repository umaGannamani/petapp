# Pet App (MERN)

Initial full stack starter for a Pet App using MongoDB, Express, React, and Node.js.

## Project Structure

- client: React + Vite frontend
- server: Express + MongoDB backend API

## Quick Start

1. Install all dependencies:

```bash
npm install
npm --prefix server install
npm --prefix client install
```

2. Configure environment:

- Copy `server/.env.example` to `server/.env`
- Set your Mongo connection string in `MONGO_URI`

3. Start both frontend and backend:

```bash
npm run dev
```

## URLs

- Frontend: http://localhost:5173
- API health: http://localhost:5000/api/health
- API pets: http://localhost:5000/api/pets

## Notes

- If `MONGO_URI` is missing, GET `/api/pets` returns sample data for easier startup.
- POST `/api/pets` requires MongoDB connection.
