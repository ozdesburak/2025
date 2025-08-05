# 2025 Restaurant Order System

This repository now contains a token‑based API for managing users, products,
events, reservations, wallets and orders using **Nest.js** and **MongoDB**.

## Structure

- `src/` – Nest source code
  - `auth/` – registration, login and JWT guard
  - `users/` – user schema and service
  - `products/` – CRUD for menu items
  - `campaigns/` – create and list promotions
  - `events/` – create and list events
  - `reservations/` – table reservations
  - `orders/` – create and list orders (protected)
  - `wallet/` – simple balance with deposit and withdrawal
  - `tables/` – restaurant tables CRUD (protected)
  - `rooms/` – hotel rooms CRUD (protected)
  - `reviews/` – customer comments and ratings (protected)
  - `ai/` – sample AI endpoints for dynamic pricing and recommendations
  - `iot/` – device management endpoints

## Running

Install dependencies (requires Node.js and access to npm registry):

```bash
npm install
npm run build
npm start
```

Environment variables can be configured via `.env` (see `.env.example`).
The server listens on `http://localhost:3000`.

## Authentication

Register or log in via `/auth/register` and `/auth/login` to receive a JWT.
Include `Authorization: Bearer <token>` in subsequent requests; all other
endpoints are protected by this token. Each Mongo schema defines indexes to
keep lookups fast.
