import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const products = [
  {
    id: 1,
    name: 'ProShield 13A Power Strip',
    category: 'Power & Cables',
    price: 24.99,
    rating: 4.8,
    badge: 'Best seller',
    color: '#dbeafe',
    icon: '🔌',
    stock: 35,
    description: 'Surge-protected power strip with 6 outlets and 2-meter cable for home and office setup.'
  },
  {
    id: 2,
    name: 'LumaMax LED Bulb 12W Pack',
    category: 'Lighting',
    price: 18.5,
    rating: 4.7,
    badge: 'Save 15%',
    color: '#fef3c7',
    icon: '💡',
    stock: 42,
    description: 'Energy-efficient LED bulbs with warm light output and long-life performance.'
  },
  {
    id: 3,
    name: 'SafeHome Smart Breaker',
    category: 'Switchgear',
    price: 59.99,
    rating: 4.9,
    badge: 'New',
    color: '#dcfce7',
    icon: '⚡',
    stock: 8,
    description: 'Advanced circuit protection with smart trip feedback for safer homes and shops.'
  },
  {
    id: 4,
    name: 'FlexiCore Copper Wire 25m',
    category: 'Power & Cables',
    price: 42.0,
    rating: 4.6,
    badge: '',
    color: '#ffedd5',
    icon: '🧵',
    stock: 12,
    description: 'Premium copper wiring for commercial and residential installations.'
  },
  {
    id: 5,
    name: 'ArcGuard Outdoor Light',
    category: 'Lighting',
    price: 74.95,
    rating: 4.8,
    badge: 'Popular',
    color: '#e0e7ff',
    icon: '🔦',
    stock: 21,
    description: 'Weatherproof security light for gardens, gates, and exterior entrances.'
  },
  {
    id: 6,
    name: 'VoltMate Digital Multimeter',
    category: 'Tools & Testing',
    price: 35.0,
    rating: 4.5,
    badge: '',
    color: '#fce7f3',
    icon: '🛠️',
    stock: 14,
    description: 'Accurate multimeter with voltage, continuity, and diode testing features.'
  },
  {
    id: 7,
    name: 'EcoFlow 3-Phase Socket',
    category: 'Switchgear',
    price: 89.99,
    rating: 4.7,
    badge: 'Top rated',
    color: '#e2e8f0',
    icon: '🔋',
    stock: 9,
    description: 'Heavy-duty socket panel with safety lock and durable industrial-grade casing.'
  },
  {
    id: 8,
    name: 'PureBeam LED Floodlight',
    category: 'Lighting',
    price: 62.0,
    rating: 4.9,
    badge: 'Hot',
    color: '#f0fdf4',
    icon: '📡',
    stock: 18,
    description: 'High-intensity floodlight designed for warehouse and exterior lighting needs.'
  }
];

const users = [];

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'VoltCart API is running.' });
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/categories', (req, res) => {
  const categories = [...new Set(products.map((product) => product.category))];
  res.json(['All products', ...categories]);
});

app.get('/api/inventory', (req, res) => {
  const inventory = products.map((product, index) => ({
    id: product.id,
    sku: `VLT-${String(index + 1).padStart(3, '0')}`,
    name: product.name,
    stock: product.stock,
    price: product.price,
    status: product.stock < 10 ? 'Low stock' : 'Healthy'
  }));

  res.json(inventory);
});

app.post('/api/auth/register', (req, res) => {
  const { name, email, password } = req.body || {};

  if (!name || !email || !password) {
    return res.status(400).json({ success: false, message: 'Name, email, and password are required.' });
  }

  const duplicate = users.find((user) => user.email.toLowerCase() === email.toLowerCase());
  if (duplicate) {
    return res.status(409).json({ success: false, message: 'A user with this email already exists.' });
  }

  const newUser = {
    id: Date.now(),
    name,
    email,
    password
  };

  users.push(newUser);

  return res.json({
    success: true,
    message: 'Account created successfully.',
    user: { id: newUser.id, name: newUser.name, email: newUser.email }
  });
});

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body || {};

  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'Email and password are required.' });
  }

  const user = users.find(
    (existingUser) =>
      existingUser.email.toLowerCase() === email.toLowerCase() && existingUser.password === password
  );

  if (!user) {
    return res.status(401).json({ success: false, message: 'Invalid email or password.' });
  }

  return res.json({
    success: true,
    message: 'Login successful.',
    user: { id: user.id, name: user.name, email: user.email }
  });
});

app.post('/api/orders/checkout', (req, res) => {
  const { items = [], customer = {} } = req.body || {};

  if (!Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ success: false, message: 'No items in the cart.' });
  }

  const total = items.reduce((sum, item) => {
    const matchingProduct = products.find((product) => product.id === item.id);
    if (!matchingProduct) {
      return sum;
    }
    return sum + matchingProduct.price * item.quantity;
  }, 0);

  items.forEach((item) => {
    const matchingProduct = products.find((product) => product.id === item.id);
    if (matchingProduct) {
      matchingProduct.stock = Math.max(0, matchingProduct.stock - item.quantity);
    }
  });

  const order = {
    id: `ORD-${Date.now()}`,
    customer: {
      name: customer.name || 'Guest',
      email: customer.email || 'guest@example.com',
      address: customer.address || 'N/A'
    },
    items,
    total,
    status: 'Paid'
  };

  return res.json({ success: true, message: 'Order placed successfully.', order });
});

app.listen(PORT, () => {
  console.log(`VoltCart API running on http://localhost:${PORT}`);
});
