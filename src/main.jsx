import React, { useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { Search, ShoppingCart, UserRound, Menu, X, ChevronRight, ShieldCheck, Truck, Headphones, Star, Plus, Minus, Trash2, ArrowRight } from 'lucide-react'
import './styles.css'

const products = [
  { id: 1, name: 'ProShield 13A Power Strip', category: 'Power & Cables', price: 24.99, rating: 4.8, badge: 'Best seller', color: '#dbeafe', icon: '🔌' },
  { id: 2, name: 'LumaMax LED Bulb 12W (Pack of 4)', category: 'Lighting', price: 18.5, rating: 4.7, badge: 'Save 15%', color: '#fef3c7', icon: '💡' },
  { id: 3, name: 'SafeHome Smart Circuit Breaker', category: 'Switchgear', price: 59.99, rating: 4.9, badge: 'New', color: '#dcfce7', icon: '⚡' },
  { id: 4, name: 'FlexiCore Copper Wire 25m', category: 'Power & Cables', price: 42.0, rating: 4.6, badge: '', color: '#ffedd5', icon: '🧵' },
  { id: 5, name: 'ArcGuard Outdoor Security Light', category: 'Lighting', price: 74.95, rating: 4.8, badge: 'Popular', color: '#e0e7ff', icon: '🔦' },
  { id: 6, name: 'VoltMate Digital Multimeter', category: 'Tools & Testing', price: 35.0, rating: 4.5, badge: '', color: '#fce7f3', icon: '🛠️' },
]
const categories = ['All products', 'Lighting', 'Power & Cables', 'Switchgear', 'Tools & Testing']

function App() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All products')
  const [sort, setSort] = useState('featured')
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [notice, setNotice] = useState('')

  const visibleProducts = useMemo(() => {
    const filtered = products.filter(p => (category === 'All products' || p.category === category) && p.name.toLowerCase().includes(query.toLowerCase()))
    return [...filtered].sort((a, b) => sort === 'price-low' ? a.price - b.price : sort === 'price-high' ? b.price - a.price : b.rating - a.rating)
  }, [query, category, sort])

  const count = cart.reduce((sum, item) => sum + item.quantity, 0)
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  function addToCart(product) {
    setCart(current => {
      const existing = current.find(item => item.id === product.id)
      return existing ? current.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item) : [...current, { ...product, quantity: 1 }]
    })
    setNotice(`${product.name} added to cart`)
    setTimeout(() => setNotice(''), 2200)
  }
  function updateQuantity(id, change) {
    setCart(current => current.map(item => item.id === id ? { ...item, quantity: Math.max(0, item.quantity + change) } : item).filter(item => item.quantity > 0))
  }

  return <>
    <div className="announcement">Free delivery on orders over $50 <span>·</span> Support from real electrical experts</div>
    <header className="header">
      <a className="logo" href="#top"><span className="logo-mark">V</span><span>volt<span>cart</span></span></a>
      <nav className={menuOpen ? 'nav open' : 'nav'}>{['Shop', 'Categories', 'Deals', 'About us', 'Contact'].map((item, i) => <a key={item} href={i === 0 ? '#products' : i === 1 ? '#categories' : '#footer'} onClick={() => setMenuOpen(false)}>{item}</a>)}</nav>
      <div className="header-actions"><button className="icon-button" aria-label="Account"><UserRound size={20} /></button><button className="cart-button" onClick={() => setCartOpen(true)}><ShoppingCart size={19} /> Cart {count > 0 && <b>{count}</b>}</button><button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button></div>
    </header>

    <main id="top">
      <section className="hero"><div className="hero-copy"><p className="eyebrow">POWER YOUR EVERYDAY</p><h1>Electrical essentials,<br /><em>made simple.</em></h1><p className="hero-text">Quality electrical supplies for home projects, professional jobs, and everything in between. Delivered to your door.</p><div className="hero-actions"><a className="primary-button" href="#products">Shop products <ArrowRight size={17} /></a><a className="text-link" href="#categories">Browse categories <ChevronRight size={16} /></a></div><div className="trust-row"><span><ShieldCheck size={18} /> Quality checked</span><span><Truck size={18} /> Fast delivery</span></div></div><div className="hero-art"><div className="sun"></div><div className="hero-card card-one">⚡<span>Safe & reliable</span></div><div className="hero-card card-two">LED<span>Save energy</span></div><div className="wire"></div><div className="hero-plug">🔌</div></div></section>
      <section className="benefits"><div><Truck /><span><strong>Fast, reliable delivery</strong><small>On orders over $50</small></span></div><div><ShieldCheck /><span><strong>Quality guaranteed</strong><small>Products you can trust</small></span></div><div><Headphones /><span><strong>Expert support</strong><small>Here when you need us</small></span></div></section>
      <section className="categories-section" id="categories"><div className="section-heading"><div><p className="eyebrow">SHOP BY NEED</p><h2>Find the right fit.</h2></div><a className="text-link" href="#products">View all categories <ArrowRight size={16} /></a></div><div className="category-grid">{[['Lighting','Bright ideas for every room','💡','lighting'],['Power & Cables','Keep everything connected','🔌','cables'],['Switchgear','Protection that works hard','⚡','switchgear'],['Tools & Testing','Work smarter and safer','🛠️','tools']].map(([name, desc, icon, type]) => <button key={name} className={`category-card ${type}`} onClick={() => { setCategory(name); document.getElementById('products').scrollIntoView({ behavior: 'smooth' }) }}><span className="category-icon">{icon}</span><span><strong>{name}</strong><small>{desc}</small></span><ChevronRight size={18} /></button>)}</div></section>
      <section className="products-section" id="products"><div className="section-heading"><div><p className="eyebrow">OUR PICKS</p><h2>Popular products.</h2></div><div className="product-tools"><label className="search"><Search size={18} /><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search products..." /></label><select value={sort} onChange={e => setSort(e.target.value)}><option value="featured">Sort: Featured</option><option value="price-low">Price: Low to high</option><option value="price-high">Price: High to low</option></select></div></div><div className="filter-row">{categories.map(item => <button className={category === item ? 'active' : ''} key={item} onClick={() => setCategory(item)}>{item}</button>)}</div><div className="product-grid">{visibleProducts.map(product => <article className="product-card" key={product.id}><div className="product-image" style={{ background: product.color }}>{product.badge && <span className="badge">{product.badge}</span>}<span className="product-emoji">{product.icon}</span></div><div className="product-info"><p className="product-category">{product.category}</p><h3>{product.name}</h3><div className="rating"><span>★</span> {product.rating} <small>(24)</small></div><div className="product-bottom"><strong>${product.price.toFixed(2)}</strong><button className="add-button" onClick={() => addToCart(product)}><Plus size={17} /> Add</button></div></div></article>)}</div>{visibleProducts.length === 0 && <p className="empty">No products found. Try another search or category.</p>}</section>
      <section className="newsletter"><div><p className="eyebrow">STAY IN THE LOOP</p><h2>Good ideas, delivered.</h2><p>Get product tips, project inspiration, and exclusive offers in your inbox.</p></div><form onSubmit={e => { e.preventDefault(); setNotice('Thanks — you are on the list!') }}><input type="email" required placeholder="Your email address" /><button className="primary-button">Subscribe <ArrowRight size={16} /></button></form></section>
    </main>
    <footer id="footer"><div className="footer-main"><div><a className="logo light" href="#top"><span className="logo-mark">V</span><span>volt<span>cart</span></span></a><p>Electrical supplies made simple<br />for every kind of project.</p></div><div><h4>Shop</h4><a href="#products">All products</a><a href="#categories">Categories</a><a href="#products">Deals</a></div><div><h4>Help</h4><a href="#footer">Contact us</a><a href="#footer">Delivery & returns</a><a href="#footer">FAQs</a></div><div><h4>Company</h4><a href="#footer">About us</a><a href="#footer">Our promise</a><a href="#footer">Privacy policy</a></div></div><div className="footer-bottom">© 2024 VoltCart. Built for better connections. <span>Secure checkout · Trusted service</span></div></footer>
    {notice && <div className="toast">{notice}</div>}
    {cartOpen && <div className="overlay" onClick={() => setCartOpen(false)}><aside className="cart-drawer" onClick={e => e.stopPropagation()}><div className="drawer-heading"><h2>Your cart <small>({count})</small></h2><button onClick={() => setCartOpen(false)}><X /></button></div>{cart.length === 0 ? <div className="empty-cart"><ShoppingCart size={42} /><h3>Your cart is empty</h3><p>Add something useful for your next project.</p><button className="primary-button" onClick={() => setCartOpen(false)}>Start shopping</button></div> : <><div className="cart-items">{cart.map(item => <div className="cart-item" key={item.id}><div className="cart-thumb" style={{ background: item.color }}>{item.icon}</div><div><h3>{item.name}</h3><strong>${item.price.toFixed(2)}</strong><div className="quantity"><button onClick={() => updateQuantity(item.id, -1)}><Minus size={13} /></button><span>{item.quantity}</span><button onClick={() => updateQuantity(item.id, 1)}><Plus size={13} /></button><button className="remove" onClick={() => setCart(current => current.filter(i => i.id !== item.id))}><Trash2 size={14} /></button></div></div></div>)}</div><div className="cart-summary"><div><span>Subtotal</span><strong>${total.toFixed(2)}</strong></div><small>Taxes and delivery calculated at checkout.</small><button className="primary-button checkout" onClick={() => setNotice('Checkout is ready to connect to Stripe.')}>Proceed to checkout <ArrowRight size={16} /></button></div></>}</aside></div>}
  </>
}

createRoot(document.getElementById('root')).render(<App />)
