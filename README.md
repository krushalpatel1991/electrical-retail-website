# VoltCart — Electrical Retail Website

A full-stack electrical supplies e-commerce storefront with React frontend and Express backend.

## Stack

- **Frontend**: React + Vite
- **Backend**: Node.js + Express
- **API**: Live data endpoints for products, auth, inventory, and checkout

## Quick Start

1. **Install Node.js 18 or newer** from [nodejs.org](https://nodejs.org/)
2. **Open the project folder** and run:

```bash
npm install
npm run dev
```

3. **Open your browser** to `http://localhost:5173` (frontend automatically loads)
4. **Backend API** runs on `http://localhost:3001`

## Features

### Customer Side
- Browse electrical products with search, filter, and sort
- Add items to cart and manage quantities
- Create account or login
- Secure checkout flow
- Product detail modal view
- Responsive mobile-friendly design

### Admin Side
- Inventory dashboard with stock status
- Low-stock alerts
- SKU tracking
- Real-time product metrics

## API Endpoints

### Products & Catalog
- `GET /api/products` - Get all products
- `GET /api/categories` - Get product categories

### Inventory
- `GET /api/inventory` - Get inventory with stock levels

### Authentication
- `POST /api/auth/register` - Create new account
- `POST /api/auth/login` - Login with email/password

### Orders
- `POST /api/orders/checkout` - Process checkout and create order

## Project Structure

```
.
├── src/
│   ├── main.jsx          (React app with all UI)
│   ├── styles.css        (Complete styling)
│   └── vite.config.js    (Vite configuration)
├── server/
│   └── index.js          (Express API server)
├── package.json          (Dependencies)
└── README.md
```

## Next Steps

- **Database Integration**: Add MongoDB or PostgreSQL to persist user accounts and orders
- **Stripe Integration**: Connect real payment processing
- **Image Uploads**: Allow product images instead of emoji icons
- **Order History**: Track past orders per user
- **Admin Panel**: Protected dashboard for managing products, inventory, and orders
- **Email Notifications**: Send order confirmations and shipping updates
- **Deployment**: Deploy to Heroku, Vercel, or AWS

## Development Notes

- The backend uses in-memory storage for demo purposes (data resets on server restart)
- Cart state is stored in browser (persists across page refreshes)
- Authentication is session-based (no JWT required for this demo)
- CORS is enabled for frontend-backend communication

## Troubleshooting

- **Port already in use?** Change `PORT` in `server/index.js` or kill the process using the port
- **CORS errors?** Ensure backend is running on http://localhost:3001
- **No products showing?** Check browser console for API errors and backend logs
