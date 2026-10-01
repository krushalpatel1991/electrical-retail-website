# VoltCart — Electrical Retail Website

A beginner-friendly full-stack storefront for an electrical supplies business.

## Stack

- Frontend: React + Vite
- Backend: Node.js + Express
- API: products, auth, inventory, and checkout endpoints

## Run locally

1. Install Node.js 18 or newer.
2. Open the project folder.
3. Run:

```bash
npm install
npm run dev
```

4. Open the local frontend URL shown by Vite, usually `http://localhost:5173`.
5. The backend API will run on `http://localhost:3001`.

## Included features

- Homepage and category browsing
- Product search, filter, and sort
- Shopping cart and checkout flow
- Login and account creation demo
- Inventory dashboard for admin overview
- Responsive layout for desktop and mobile
- Express API with live data endpoints

## API endpoints

- `GET /api/health`
- `GET /api/products`
- `GET /api/categories`
- `GET /api/inventory`
- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/orders/checkout`

## Next steps

- Connect Stripe for real payments
- Add a database such as MongoDB or PostgreSQL
- Create protected admin routes and role-based access
- Add product image uploads and product detail pages
