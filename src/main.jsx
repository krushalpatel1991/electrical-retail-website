import React, { useEffect, useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowRight,
  BadgeCheck,
  ChevronRight,
  CreditCard,
  Eye,
  Headphones,
  Mail,
  MapPin,
  Menu,
  Minus,
  Package2,
  Phone,
  Plus,
  Search,
  ShieldCheck,
  ShoppingCart,
  Star,
  Trash2,
  Truck,
  UserRound,
  Warehouse,
  X,
  Zap,
} from 'lucide-react'
import './styles.css'

const API_BASE = 'http://localhost:3001/api'

function formatMoney(value) {
  return `$${value.toFixed(2)}`
}

function App() {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState(['All products'])
  const [inventory, setInventory] = useState([])

  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All products')
  const [sortBy, setSortBy] = useState('featured')
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [accountOpen, setAccountOpen] = useState(false)
  const [checkoutOpen, setCheckoutOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [loginMode, setLoginMode] = useState('login')
  const [notice, setNotice] = useState('')
  const [loading, setLoading] = useState(true)
  const [currentUser, setCurrentUser] = useState(null)
  const [checkoutForm, setCheckoutForm] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    card: '',
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const [productsRes, categoriesRes, inventoryRes] = await Promise.all([
          fetch(`${API_BASE}/products`).then((res) => res.json()),
          fetch(`${API_BASE}/categories`).then((res) => res.json()),
          fetch(`${API_BASE}/inventory`).then((res) => res.json()),
        ])

        setProducts(productsRes)
        setCategories(categoriesRes)
        setInventory(inventoryRes)
      } catch (error) {
        console.error('Error fetching data:', error)
        showNotice('Failed to load products')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const visibleProducts = useMemo(() => {
    let filtered = products.filter((product) => {
      const matchesCategory = category === 'All products' || product.category === category
      const matchesSearch = product.name.toLowerCase().includes(query.toLowerCase())
      return matchesCategory && matchesSearch
    })

    if (sortBy === 'price-low') {
      filtered = [...filtered].sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-high') {
      filtered = [...filtered].sort((a, b) => b.price - a.price)
    } else if (sortBy === 'rating') {
      filtered = [...filtered].sort((a, b) => b.rating - a.rating)
    }

    return filtered
  }, [query, category, sortBy, products])

  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const lowStockCount = inventory.filter((item) => item.stock < 10).length

  function showNotice(message) {
    setNotice(message)
    window.setTimeout(() => setNotice(''), 2500)
  }

  function addToCart(product) {
    setCart((current) => {
      const existing = current.find((item) => item.id === product.id)
      if (existing) {
        return current.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        )
      }
      return [...current, { ...product, quantity: 1 }]
    })
    showNotice(`${product.name} added to cart`)
  }

  function updateQuantity(id, delta) {
    setCart((current) =>
      current
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }

  async function handleLogin(email, password) {
    try {
      const res = await fetch(`${API_BASE}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })
      const data = await res.json()
      if (data.success) {
        setCurrentUser(data.user)
        setAccountOpen(false)
        showNotice(`Welcome back, ${data.user.name}!`)
      } else {
        showNotice(data.message || 'Login failed')
      }
    } catch (error) {
      showNotice('Login error')
    }
  }

  async function handleSignup(name, email, password) {
    try {
      const res = await fetch(`${API_BASE}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      })
      const data = await res.json()
      if (data.success) {
        setCurrentUser(data.user)
        setAccountOpen(false)
        showNotice(`Account created! Welcome, ${data.user.name}!`)
      } else {
        showNotice(data.message || 'Signup failed')
      }
    } catch (error) {
      showNotice('Signup error')
    }
  }

  async function handleCheckoutSubmit(event) {
    event.preventDefault()
    try {
      const res = await fetch(`${API_BASE}/orders/checkout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: cart,
          customer: checkoutForm,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setCart([])
        setCheckoutOpen(false)
        showNotice('Payment successful. Order confirmed.')
        setCheckoutForm({ name: '', email: '', address: '', city: '', card: '' })
      } else {
        showNotice(data.message || 'Checkout failed')
      }
    } catch (error) {
      showNotice('Checkout error')
    }
  }

  if (loading) {
    return (
      <div style={{ display: 'grid', placeItems: 'center', minHeight: '100vh', color: '#1c2c24' }}>
        <div>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>⚡</div>
          <h2>Loading VoltCart...</h2>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="announcement">Free delivery on orders over $50 · Trusted by homeowners and contractors</div>

      <header className="header">
        <a href="#home" className="logo" aria-label="VoltCart home">
          <span className="logo-mark">V</span>
          <span>
            volt<span>cart</span>
          </span>
        </a>

        <nav className={menuOpen ? 'nav open' : 'nav'}>
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="#shop" onClick={() => setMenuOpen(false)}>
            Shop
          </a>
          <a href="#categories" onClick={() => setMenuOpen(false)}>
            Categories
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About us
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
          <a href="#admin" onClick={() => setMenuOpen(false)}>
            Admin
          </a>
        </nav>

        <div className="header-actions">
          <button
            className="icon-button"
            aria-label="Account"
            onClick={() => setAccountOpen(true)}
            title={currentUser ? `Logged in as ${currentUser.name}` : 'Login or signup'}
          >
            <UserRound size={18} />
            {currentUser && <span style={{ marginLeft: '4px', fontSize: '11px' }}>✓</span>}
          </button>
          <button className="cart-button" onClick={() => setCartOpen(true)}>
            <ShoppingCart size={17} />
            Cart
            {itemCount > 0 && <span>{itemCount}</span>}
          </button>
          <button className="mobile-menu" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle menu">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <main id="home">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">POWER EVERY PROJECT</p>
            <h1>
              Electrical essentials,
              <em>made easy.</em>
            </h1>
            <p className="hero-text">
              Shop trusted lighting, wiring, power solutions, tools, and safety equipment for homes,
              offices, and commercial spaces.
            </p>

            <div className="hero-actions">
              <a href="#shop" className="primary-button">
                Shop products
                <ArrowRight size={17} />
              </a>
              <a href="#about" className="text-link">
                Why choose us
                <ChevronRight size={16} />
              </a>
            </div>

            <div className="trust-row">
              <span>
                <ShieldCheck size={16} /> Quality checked
              </span>
              <span>
                <Truck size={16} /> Fast delivery
              </span>
            </div>
          </div>

          <div className="hero-art" aria-hidden="true">
            <div className="sun" />
            <div className="hero-card card-one">
              <Zap size={28} />
              <span>Safe & reliable</span>
            </div>
            <div className="hero-card card-two">
              LED
              <span>Save energy</span>
            </div>
            <div className="wire" />
            <div className="hero-plug">🔌</div>
          </div>
        </section>

        <section className="benefits">
          <div>
            <Truck size={21} />
            <span>
              <strong>Fast delivery</strong>
              <small>Next-day dispatch on top items</small>
            </span>
          </div>
          <div>
            <ShieldCheck size={21} />
            <span>
              <strong>Quality guaranteed</strong>
              <small>Products tested for daily use</small>
            </span>
          </div>
          <div>
            <Headphones size={21} />
            <span>
              <strong>Expert support</strong>
              <small>Friendly help for every project</small>
            </span>
          </div>
        </section>

        <section className="categories-section" id="categories">
          <div className="section-heading">
            <div>
              <p className="eyebrow">SHOP BY NEED</p>
              <h2>Popular categories</h2>
            </div>
            <a href="#shop" className="text-link">
              Browse all products
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="category-grid">
            {[
              { name: 'Lighting', icon: '💡', desc: 'Bright ideas for every room', className: 'lighting' },
              { name: 'Power & Cables', icon: '🔌', desc: 'Stay connected and safe', className: 'cables' },
              { name: 'Switchgear', icon: '⚡', desc: 'Protection that works hard', className: 'switchgear' },
              { name: 'Tools & Testing', icon: '🔧', desc: 'Precision and control', className: 'tools' },
            ].map((item) => (
              <button
                key={item.name}
                className={`category-card ${item.className}`}
                onClick={() => {
                  setCategory(item.name)
                  document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <span className="category-icon">{item.icon}</span>
                <span>
                  <strong>{item.name}</strong>
                  <small>{item.desc}</small>
                </span>
                <ChevronRight size={17} />
              </button>
            ))}
          </div>
        </section>

        <section className="products-section" id="shop">
          <div className="section-heading">
            <div>
              <p className="eyebrow">OUR PICKS</p>
              <h2>Top electrical products</h2>
            </div>

            <div className="product-tools">
              <label className="search-box">
                <Search size={16} />
                <input
                  type="text"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search products"
                />
              </label>

              <select value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
                <option value="featured">Featured</option>
                <option value="rating">Top rated</option>
                <option value="price-low">Price low to high</option>
                <option value="price-high">Price high to low</option>
              </select>
            </div>
          </div>

          <div className="filter-row">
            {categories.map((item) => (
              <button
                key={item}
                className={category === item ? 'active' : ''}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="product-grid">
            {visibleProducts.map((product) => (
              <article className="product-card" key={product.id}>
                <div className="product-image" style={{ background: product.color }}>
                  {product.badge && <span className="badge">{product.badge}</span>}
                  <span className="product-emoji">{product.icon}</span>
                </div>

                <div className="product-info">
                  <p className="product-category">{product.category}</p>
                  <h3>{product.name}</h3>
                  <div className="rating-row">
                    <Star size={13} fill="currentColor" />
                    <span>{product.rating}</span>
                    <small>{product.stock} in stock</small>
                  </div>

                  <div className="product-bottom">
                    <strong>{formatMoney(product.price)}</strong>
                    <div className="product-actions">
                      <button className="ghost-button" onClick={() => setSelectedProduct(product)}>
                        <Eye size={14} />
                        View
                      </button>
                      <button className="add-button" onClick={() => addToCart(product)}>
                        <Plus size={14} />
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {visibleProducts.length === 0 && <p className="empty-state">No products match your search.</p>}
        </section>

        <section className="features">
          <div className="feature-box">
            <BadgeCheck size={22} />
            <h3>Certified products</h3>
            <p>Every item is selected for safety, reliability, and daily use.</p>
          </div>
          <div className="feature-box">
            <Warehouse size={22} />
            <h3>Inventory ready</h3>
            <p>Our stock is tracked to keep essential electrical goods moving.</p>
          </div>
          <div className="feature-box">
            <CreditCard size={22} />
            <h3>Secure checkout</h3>
            <p>Fast online payments built for a smoother customer experience.</p>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="section-heading">
            <div>
              <p className="eyebrow">WHY CUSTOMERS CHOOSE US</p>
              <h2>Built for homes, shops, and contractors.</h2>
            </div>
          </div>

          <div className="about-grid">
            <div className="about-card glass">
              <p className="big-number">5000+</p>
              <p>Products available across lighting, safety, and power systems</p>
            </div>
            <div className="about-card">
              <h3>Our promise</h3>
              <p>
                We combine practical expertise, competitive pricing, and dependable service to help customers
                complete every electrical job confidently.
              </p>
            </div>
            <div className="about-card">
              <h3>Why VoltCart</h3>
              <ul>
                <li>Hand-picked electrical brands</li>
                <li>Same-day support for bulk projects</li>
                <li>Clear pricing and no hidden fees</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-copy">
            <p className="eyebrow">CONTACT US</p>
            <h2>Need expert help for your next project?</h2>
            <p>Tell us what you're working on and we'll help you find the right products, quantities, and setup.</p>
            <div className="contact-list">
              <span>
                <Phone size={15} /> +1 (415) 775-9901
              </span>
              <span>
                <Mail size={15} /> hello@voltcart.com
              </span>
              <span>
                <MapPin size={15} /> 42 Market Street, San Francisco, CA
              </span>
            </div>
          </div>

          <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
            <input type="text" placeholder="Your name" />
            <input type="email" placeholder="Your email" />
            <textarea rows="4" placeholder="Tell us about your requirement" />
            <button type="submit" className="primary-button">
              Send enquiry
              <ArrowRight size={16} />
            </button>
          </form>
        </section>

        <section className="admin-section" id="admin">
          <div className="section-heading">
            <div>
              <p className="eyebrow">ADMIN DASHBOARD</p>
              <h2>Inventory overview</h2>
            </div>
            <span className="status-badge">{lowStockCount} low-stock items</span>
          </div>

          <div className="admin-grid">
            <div className="admin-dash">
              <div className="metric">
                <Package2 size={18} />
                <span>
                  <strong>{products.length}</strong>
                  <small>Total products</small>
                </span>
              </div>
              <div className="metric">
                <Warehouse size={18} />
                <span>
                  <strong>{inventory.length}</strong>
                  <small>Tracked SKUs</small>
                </span>
              </div>
              <div className="metric">
                <ShoppingCart size={18} />
                <span>
                  <strong>{itemCount}</strong>
                  <small>Cart items</small>
                </span>
              </div>
            </div>

            <div className="inventory-list">
              {inventory.map((item) => (
                <div className="inventory-row" key={item.id}>
                  <div>
                    <strong>{item.name}</strong>
                    <small>{item.sku}</small>
                  </div>
                  <span className={item.stock < 10 ? 'tag warning' : 'tag'}>{item.stock} in stock</span>
                  <span className="price">{formatMoney(item.price)}</span>
                  <span className={item.status === 'Low stock' ? 'status low' : 'status'}>{item.status}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer id="footer">
        <div className="footer-main">
          <div>
            <a href="#home" className="logo light">
              <span className="logo-mark">V</span>
              <span>
                volt<span>cart</span>
              </span>
            </a>
            <p>Trusted electrical products for smarter living, safer spaces, and dependable projects.</p>
          </div>
          <div>
            <h4>Shop</h4>
            <a href="#shop">All products</a>
            <a href="#categories">Categories</a>
            <a href="#admin">Inventory</a>
          </div>
          <div>
            <h4>Company</h4>
            <a href="#about">About us</a>
            <a href="#contact">Contact</a>
            <a href="#footer">Support</a>
          </div>
          <div>
            <h4>Services</h4>
            <a href="#footer">Bulk orders</a>
            <a href="#footer">Installation help</a>
            <a href="#footer">Delivery info</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2025 VoltCart</span>
          <span>Secure checkout · Trusted service</span>
        </div>
      </footer>

      {selectedProduct && (
        <div className="overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal-card" onClick={(event) => event.stopPropagation()}>
            <button className="close-button" onClick={() => setSelectedProduct(null)} aria-label="Close product details">
              <X size={18} />
            </button>
            <div className="modal-visual" style={{ background: selectedProduct.color }}>
              <span>{selectedProduct.icon}</span>
            </div>
            <div className="modal-copy">
              <p className="eyebrow">{selectedProduct.category}</p>
              <h3>{selectedProduct.name}</h3>
              <div className="rating-row">
                <Star size={12} fill="currentColor" />
                <span>{selectedProduct.rating}</span>
              </div>
              <p>{selectedProduct.description}</p>
              <div className="modal-bottom">
                <strong>{formatMoney(selectedProduct.price)}</strong>
                <button className="primary-button" onClick={() => addToCart(selectedProduct)}>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {accountOpen && (
        <div className="overlay" onClick={() => setAccountOpen(false)}>
          <aside className="drawer-panel" onClick={(event) => event.stopPropagation()}>
            <div className="drawer-header">
              <h3>{currentUser ? `Welcome, ${currentUser.name}` : loginMode === 'login' ? 'Account access' : 'Create account'}</h3>
              <button onClick={() => setAccountOpen(false)} aria-label="Close account panel">
                <X size={18} />
              </button>
            </div>

            {currentUser ? (
              <div style={{ padding: '20px 0' }}>
                <div style={{ background: '#f1f6f2', padding: '16px', borderRadius: '10px', marginBottom: '16px' }}>
                  <p style={{ margin: 0, color: '#516760', fontSize: '12px' }}>Logged in as</p>
                  <strong style={{ display: 'block', fontSize: '16px', marginTop: '4px' }}>{currentUser.name}</strong>
                  <small style={{ color: '#7a887f' }}>{currentUser.email}</small>
                </div>
                <button
                  className="primary-button"
                  style={{ width: '100%' }}
                  onClick={() => {
                    setCurrentUser(null)
                    setAccountOpen(false)
                  }}
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <div className="switcher">
                  <button className={loginMode === 'login' ? 'active' : ''} onClick={() => setLoginMode('login')}>
                    Login
                  </button>
                  <button className={loginMode === 'signup' ? 'active' : ''} onClick={() => setLoginMode('signup')}>
                    Sign up
                  </button>
                </div>

                <form
                  className="account-form"
                  onSubmit={(event) => {
                    event.preventDefault()
                    const formData = new FormData(event.target)
                    if (loginMode === 'login') {
                      handleLogin(formData.get('email'), formData.get('password'))
                    } else {
                      handleSignup(formData.get('name'), formData.get('email'), formData.get('password'))
                    }
                  }}
                >
                  {loginMode === 'signup' && <input type="text" name="name" placeholder="Full name" required />}
                  <input type="email" name="email" placeholder="Email address" required />
                  <input type="password" name="password" placeholder="Password" required />
                  <button type="submit" className="primary-button">
                    {loginMode === 'login' ? 'Login' : 'Create account'}
                  </button>
                </form>
              </>
            )}
          </aside>
        </div>
      )}

      {cartOpen && (
        <div className="overlay" onClick={() => setCartOpen(false)}>
          <aside className="drawer-panel cart-panel" onClick={(event) => event.stopPropagation()}>
            <div className="drawer-header">
              <h3>Your cart</h3>
              <button onClick={() => setCartOpen(false)} aria-label="Close cart">
                <X size={18} />
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="empty-cart">
                <ShoppingCart size={42} />
                <h4>Your cart is empty</h4>
                <p>Add products to start building your order.</p>
                <button className="primary-button" onClick={() => setCartOpen(false)}>
                  Continue shopping
                </button>
              </div>
            ) : (
              <>
                <div className="cart-items">
                  {cart.map((item) => (
                    <div className="cart-item" key={item.id}>
                      <div className="cart-thumb" style={{ background: item.color }}>
                        {item.icon}
                      </div>
                      <div className="cart-details">
                        <h4>{item.name}</h4>
                        <strong>{formatMoney(item.price)}</strong>
                        <div className="quantity-box">
                          <button onClick={() => updateQuantity(item.id, -1)} aria-label="Decrease quantity">
                            <Minus size={12} />
                          </button>
                          <span>{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)} aria-label="Increase quantity">
                            <Plus size={12} />
                          </button>
                          <button className="remove-button" onClick={() => updateQuantity(item.id, -item.quantity)}>
                            <Trash2 size={12} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="cart-summary">
                  <div>
                    <span>Subtotal</span>
                    <strong>{formatMoney(subtotal)}</strong>
                  </div>
                  <small>Shipping and taxes calculated at checkout.</small>
                  <button
                    className="primary-button"
                    onClick={() => {
                      setCartOpen(false)
                      setCheckoutOpen(true)
                    }}
                  >
                    Proceed to checkout
                  </button>
                </div>
              </>
            )}
          </aside>
        </div>
      )}

      {checkoutOpen && (
        <div className="overlay" onClick={() => setCheckoutOpen(false)}>
          <div className="checkout-card" onClick={(event) => event.stopPropagation()}>
            <div className="drawer-header">
              <h3>Secure checkout</h3>
              <button onClick={() => setCheckoutOpen(false)} aria-label="Close checkout form">
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleCheckoutSubmit} className="checkout-form">
              <input
                type="text"
                placeholder="Full name"
                value={checkoutForm.name}
                onChange={(event) => setCheckoutForm({ ...checkoutForm, name: event.target.value })}
                required
              />
              <input
                type="email"
                placeholder="Email address"
                value={checkoutForm.email}
                onChange={(event) => setCheckoutForm({ ...checkoutForm, email: event.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Delivery address"
                value={checkoutForm.address}
                onChange={(event) => setCheckoutForm({ ...checkoutForm, address: event.target.value })}
                required
              />
              <input
                type="text"
                placeholder="City"
                value={checkoutForm.city}
                onChange={(event) => setCheckoutForm({ ...checkoutForm, city: event.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Card number"
                value={checkoutForm.card}
                onChange={(event) => setCheckoutForm({ ...checkoutForm, card: event.target.value })}
                required
              />
              <div className="checkout-total">
                <span>Total</span>
                <strong>{formatMoney(subtotal)}</strong>
              </div>
              <button type="submit" className="primary-button">
                Pay {formatMoney(subtotal)}
              </button>
            </form>
          </div>
        </div>
      )}

      {notice && <div className="toast">{notice}</div>}
    </>
  )
}

createRoot(document.getElementById('root')).render(<App />)
