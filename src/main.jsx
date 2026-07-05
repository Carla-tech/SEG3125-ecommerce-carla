import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const products = [
  {
    id: 1,
    name: 'Blush Satin Wrap Dress',
    category: 'Clothing',
    type: 'Dresses',
    price: 68,
    sale: true,
    size: ['XS', 'S', 'M', 'L'],
    color: 'Pink',
    material: 'Satin',
    image: '/products/blush-satin-wrap-dress.svg',
    imageAlt: 'Pink satin wrap dress illustration',
    description: 'A soft satin wrap dress designed for dinners, birthdays, and polished evenings.',
    details: ['Adjustable waist tie', 'Midi length', 'Soft drape fabric']
  },
  {
    id: 2,
    name: 'Everyday Ribbed Knit Top',
    category: 'Clothing',
    type: 'Tops',
    price: 34,
    sale: false,
    size: ['S', 'M', 'L', 'XL'],
    color: 'Cream',
    material: 'Cotton Blend',
    image: '/products/everyday-ribbed-knit-top.svg',
    imageAlt: 'Cream ribbed knit top illustration',
    description: 'A versatile ribbed top that pairs easily with denim, skirts, or tailored pants.',
    details: ['Stretchy rib texture', 'Breathable cotton blend', 'Regular fit']
  },
  {
    id: 3,
    name: 'Rose Glow Lip Oil',
    category: 'Beauty',
    type: 'Lips',
    price: 18,
    sale: true,
    size: ['One Size'],
    color: 'Rose',
    material: 'Gloss Finish',
    image: '/products/rose-glow-lip-oil.svg',
    imageAlt: 'Rose lip oil tube illustration',
    description: 'A hydrating lip oil with a subtle rose tint and glossy finish.',
    details: ['Non-sticky shine', 'Light rose tint', 'Pocket-friendly size']
  },
  {
    id: 4,
    name: 'Soft Tailored Wide-Leg Pants',
    category: 'Clothing',
    type: 'Bottoms',
    price: 56,
    sale: false,
    size: ['XS', 'S', 'M', 'L', 'XL'],
    color: 'Black',
    material: 'Crepe',
    image: '/products/soft-tailored-wide-leg-pants.svg',
    imageAlt: 'Black wide-leg pants illustration',
    description: 'Wide-leg pants with a smooth tailored look for work, events, and everyday styling.',
    details: ['High waist', 'Wide-leg silhouette', 'Polished crepe fabric']
  },
  {
    id: 5,
    name: 'Dewy Skin Tint',
    category: 'Beauty',
    type: 'Face',
    price: 32,
    sale: false,
    size: ['Light', 'Medium', 'Tan', 'Deep'],
    color: 'Neutral',
    material: 'Dewy Finish',
    image: '/products/dewy-skin-tint.svg',
    imageAlt: 'Dewy skin tint bottle illustration',
    description: 'A lightweight skin tint for a fresh, hydrated, everyday glow.',
    details: ['Light coverage', 'Dewy finish', 'Comfortable daily wear']
  },
  {
    id: 6,
    name: 'Vanilla Cloud Body Mist',
    category: 'Beauty',
    type: 'Fragrance',
    price: 24,
    sale: true,
    size: ['100 ml'],
    color: 'Vanilla',
    material: 'Warm Scent',
    image: '/products/vanilla-cloud-body-mist.svg',
    imageAlt: 'Vanilla body mist bottle illustration',
    description: 'A soft vanilla body mist with warm floral notes for everyday use.',
    details: ['Warm vanilla scent', 'Easy spray bottle', 'Light and wearable']
  },
  {
    id: 7,
    name: 'Pearl Button Cardigan',
    category: 'Clothing',
    type: 'Tops',
    price: 49,
    sale: false,
    size: ['S', 'M', 'L'],
    color: 'White',
    material: 'Knit',
    image: '/products/pearl-button-cardigan.svg',
    imageAlt: 'White pearl button cardigan illustration',
    description: 'A feminine cardigan with pearl-style buttons and a comfortable knit texture.',
    details: ['Pearl-style buttons', 'Soft knit feel', 'Layering piece']
  },
  {
    id: 8,
    name: 'Berry Velvet Blush',
    category: 'Beauty',
    type: 'Face',
    price: 21,
    sale: false,
    size: ['One Size'],
    color: 'Berry',
    material: 'Velvet Finish',
    image: '/products/berry-velvet-blush.svg',
    imageAlt: 'Berry blush compact illustration',
    description: 'A buildable berry blush with a smooth velvet finish.',
    details: ['Blendable color', 'Velvet finish', 'Compact packaging']
  },
  {
    id: 9,
    name: 'Champagne Satin Skirt',
    category: 'Clothing',
    type: 'Bottoms',
    price: 52,
    sale: true,
    size: ['XS', 'S', 'M', 'L'],
    color: 'Champagne',
    material: 'Satin',
    image: '/products/champagne-satin-skirt.svg',
    imageAlt: 'Champagne satin skirt illustration',
    description: 'A satin skirt with an elegant shine that works for day-to-night outfits.',
    details: ['Midi length', 'Soft elastic waist', 'Light satin sheen']
  },
  {
    id: 10,
    name: 'Clean Girl Brow Gel',
    category: 'Beauty',
    type: 'Brows',
    price: 16,
    sale: false,
    size: ['Clear', 'Soft Brown'],
    color: 'Clear',
    material: 'Natural Finish',
    image: '/products/clean-girl-brow-gel.svg',
    imageAlt: 'Clear brow gel tube illustration',
    description: 'A lightweight brow gel that shapes brows without a heavy feeling.',
    details: ['Flexible hold', 'Clear finish option', 'Small precision brush']
  },
  {
    id: 11,
    name: 'Weekend Denim Mini Dress',
    category: 'Clothing',
    type: 'Dresses',
    price: 62,
    sale: false,
    size: ['S', 'M', 'L'],
    color: 'Blue',
    material: 'Denim',
    image: '/products/weekend-denim-mini-dress.svg',
    imageAlt: 'Blue denim mini dress illustration',
    description: 'A casual denim mini dress made for easy weekend outfits.',
    details: ['Structured denim', 'Button-front detail', 'Casual fit']
  },
  {
    id: 12,
    name: 'Coconut Repair Hair Mask',
    category: 'Beauty',
    type: 'Hair',
    price: 28,
    sale: true,
    size: ['250 ml'],
    color: 'Coconut',
    material: 'Cream Formula',
    image: '/products/coconut-repair-hair-mask.svg',
    imageAlt: 'Coconut hair mask jar illustration',
    description: 'A creamy hair mask designed to make dry hair feel softer and smoother.',
    details: ['Cream texture', 'Coconut scent', 'Weekly treatment']
  }
];

const allFilters = {
  category: ['Clothing', 'Beauty'],
  type: ['Dresses', 'Tops', 'Bottoms', 'Face', 'Lips', 'Hair', 'Brows', 'Fragrance'],
  size: ['XS', 'S', 'M', 'L', 'XL', 'One Size', '100 ml', '250 ml', 'Light', 'Medium', 'Tan', 'Deep', 'Clear', 'Soft Brown'],
  color: ['Pink', 'Cream', 'Rose', 'Black', 'Neutral', 'Vanilla', 'White', 'Berry', 'Champagne', 'Clear', 'Blue', 'Coconut'],
  material: ['Satin', 'Cotton Blend', 'Gloss Finish', 'Crepe', 'Dewy Finish', 'Warm Scent', 'Knit', 'Velvet Finish', 'Natural Finish', 'Denim', 'Cream Formula']
};

const steps = ['Cart', 'Information', 'Payment', 'Confirmation'];

function App() {
  const [filters, setFilters] = useState({ category: [], type: [], size: [], color: [], material: [], saleOnly: false, maxPrice: 80 });
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [checkoutStep, setCheckoutStep] = useState(0);
  const [customer, setCustomer] = useState({ name: '', email: '', address: '', city: '', card: '', expiry: '' });
  const [survey, setSurvey] = useState({ rating: '5', comment: '', submitted: false });
  const [language, setLanguage] = useState('EN');

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchList = (key, value) => filters[key].length === 0 || filters[key].includes(value);
      const sizeMatch = filters.size.length === 0 || product.size.some((s) => filters.size.includes(s));
      return (
        matchList('category', product.category) &&
        matchList('type', product.type) &&
        sizeMatch &&
        matchList('color', product.color) &&
        matchList('material', product.material) &&
        (!filters.saleOnly || product.sale) &&
        product.price <= filters.maxPrice
      );
    });
  }, [filters]);

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  function toggleFilter(key, value) {
    setFilters((prev) => ({
      ...prev,
      [key]: prev[key].includes(value) ? prev[key].filter((item) => item !== value) : [...prev[key], value]
    }));
  }

  function addToCart(product) {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  }

  function changeQuantity(productId, amount) {
    setCart((prev) => prev
      .map((item) => (item.id === productId ? { ...item, quantity: Math.max(0, item.quantity + amount) } : item))
      .filter((item) => item.quantity > 0));
  }

  function canContinue() {
    if (checkoutStep === 0) return cart.length > 0;
    if (checkoutStep === 1) return customer.name && customer.email && customer.address && customer.city;
    if (checkoutStep === 2) return customer.card && customer.expiry;
    return true;
  }

  return (
    <div className="app-shell">
      <header className="topbar" id="top">
        <a className="brand" href="#top" aria-label="Belle and Bloom home">
          <span className="brand-mark">B</span>
          <span>Belle & Bloom</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#shop">Shop</a>
          <a href="#checkout">Checkout</a>
          <a href="#survey">Survey</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="top-actions">
          <button className="language-button" onClick={() => setLanguage(language === 'EN' ? 'FR' : 'EN')} aria-label="Toggle language">
            {language === 'EN' ? 'FR' : 'EN'}
          </button>
          <a className="cart-pill" href="#checkout">Bag: {cartCount}</a>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">Women's clothing and beauty</p>
            <h1>Soft style, easy shopping, and beauty essentials in one place.</h1>
            <p className="hero-text">Discover curated dresses, everyday pieces, lip care, skin glow products, and self-care favorites designed for simple browsing and confident decisions.</p>
            <div className="hero-actions">
              <a className="primary-button" href="#shop">Shop the edit</a>
              <a className="secondary-button" href="#deals">See today's deals</a>
            </div>
          </div>
          <div className="promo-card" id="deals" aria-label="Promotional deal">
            <p className="deal-label">Limited time</p>
            <h2>Buy any 2 sale items and enjoy a softer checkout moment!</h2>
            <p>Look for the pink Sale badge while browsing.</p>
          </div>
        </section>

        <section className="trust-row" aria-label="Store promises">
          <article><strong>Clear filters</strong><span>Find clothes or beauty by color, size, finish, and budget.</span></article>
          <article><strong>Step-by-step checkout</strong><span>Always see what is done and what comes next.</span></article>
          <article><strong>Friendly support</strong><span>Contact Carla at any time for this prototype.</span></article>
        </section>

        <section className="shop-layout" id="shop">
          <aside className="filters-panel" aria-label="Product filters">
            <div className="panel-heading">
              <div>
                <p className="eyebrow">Faceted search</p>
                <h2>Refine products</h2>
              </div>
              <button className="text-button" onClick={() => setFilters({ category: [], type: [], size: [], color: [], material: [], saleOnly: false, maxPrice: 80 })}>Reset</button>
            </div>

            <FilterGroup title="Category" values={allFilters.category} selected={filters.category} onToggle={(value) => toggleFilter('category', value)} />
            <FilterGroup title="Product type" values={allFilters.type} selected={filters.type} onToggle={(value) => toggleFilter('type', value)} />
            <FilterGroup title="Size / shade" values={allFilters.size} selected={filters.size} onToggle={(value) => toggleFilter('size', value)} />
            <FilterGroup title="Color / scent" values={allFilters.color} selected={filters.color} onToggle={(value) => toggleFilter('color', value)} />
            <FilterGroup title="Material / finish" values={allFilters.material} selected={filters.material} onToggle={(value) => toggleFilter('material', value)} />

            <div className="filter-block">
              <label className="checkbox-row">
                <input type="checkbox" checked={filters.saleOnly} onChange={(event) => setFilters({ ...filters, saleOnly: event.target.checked })} />
                Sale items only
              </label>
            </div>
            <div className="filter-block">
              <label htmlFor="priceRange">Maximum price: ${filters.maxPrice}</label>
              <input id="priceRange" type="range" min="15" max="80" value={filters.maxPrice} onChange={(event) => setFilters({ ...filters, maxPrice: Number(event.target.value) })} />
            </div>
          </aside>

          <section className="products-area" aria-label="Product results">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Explore</p>
                <h2>{filteredProducts.length} products match your choices</h2>
              </div>
              <p className="helper-text">Start broad, then narrow your search using filters. This supports both browsing and focused shopping.</p>
            </div>
            <div className="product-grid">
              {filteredProducts.map((product) => (
                <article className="product-card" key={product.id}>
                  {product.sale && <span className="sale-badge">Sale</span>}
                  <button className="image-button" onClick={() => setSelectedProduct(product)} aria-label={`View details for ${product.name}`}>
                    <img className="product-image" src={product.image} alt={product.imageAlt} />
                  </button>
                  <div className="product-info">
                    <p className="product-type">{product.category} · {product.type}</p>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <div className="product-meta">
                      <span>${product.price.toFixed(2)} CAD</span>
                      <span>{product.color}</span>
                    </div>
                    <div className="card-actions">
                      <button className="primary-button small" onClick={() => addToCart(product)}>Add to bag</button>
                      <button className="secondary-button small" onClick={() => setSelectedProduct(product)}>Details</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </section>

        <section className="checkout-section" id="checkout">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Follow instructions</p>
              <h2>Checkout process</h2>
            </div>
            <p className="helper-text">The step indicator shows where you are, what is done, and what remains.</p>
          </div>
          <StepIndicator current={checkoutStep} />
          <div className="checkout-grid">
            <div className="checkout-card">
              {checkoutStep === 0 && <CartStep cart={cart} changeQuantity={changeQuantity} total={cartTotal} />}
              {checkoutStep === 1 && <InformationStep customer={customer} setCustomer={setCustomer} />}
              {checkoutStep === 2 && <PaymentStep customer={customer} setCustomer={setCustomer} total={cartTotal} />}
              {checkoutStep === 3 && <ConfirmationStep customer={customer} total={cartTotal} />}
              <div className="checkout-actions">
                <button className="secondary-button" disabled={checkoutStep === 0} onClick={() => setCheckoutStep(Math.max(0, checkoutStep - 1))}>Back</button>
                {checkoutStep < 3 ? (
                  <button className="primary-button" disabled={!canContinue()} onClick={() => setCheckoutStep(checkoutStep + 1)}>Continue</button>
                ) : (
                  <button className="primary-button" onClick={() => { setCheckoutStep(0); setCart([]); }}>Start a new order</button>
                )}
              </div>
              {!canContinue() && checkoutStep < 3 && <p className="form-warning">Complete this step to continue.</p>}
            </div>
            <aside className="summary-card">
              <h3>Order summary</h3>
              <p>{cartCount} item(s)</p>
              <p>Subtotal: ${cartTotal.toFixed(2)} CAD</p>
              <p>Estimated shipping: $0.00 CAD</p>
              <strong>Total: ${cartTotal.toFixed(2)} CAD</strong>
            </aside>
          </div>
        </section>

        <section className="survey-section" id="survey">
          <div className="survey-copy">
            <p className="eyebrow">Communication process</p>
            <h2>How did your visit feel?</h2>
            <p>Your feedback helps Belle & Bloom improve the shopping experience. This quick survey is optional and takes less than one minute.</p>
          </div>
          <form className="survey-form" onSubmit={(event) => { event.preventDefault(); setSurvey({ ...survey, submitted: true }); }}>
            <label htmlFor="rating">Overall experience</label>
            <select id="rating" value={survey.rating} onChange={(event) => setSurvey({ ...survey, rating: event.target.value })}>
              <option value="5">5 - Loved it</option>
              <option value="4">4 - Good</option>
              <option value="3">3 - Okay</option>
              <option value="2">2 - Needs work</option>
              <option value="1">1 - Difficult</option>
            </select>
            <label htmlFor="comment">Comment</label>
            <textarea id="comment" rows="4" placeholder="Tell us what helped or what could be clearer." value={survey.comment} onChange={(event) => setSurvey({ ...survey, comment: event.target.value })}></textarea>
            <button className="primary-button" type="submit">Send feedback</button>
            {survey.submitted && <p className="success-message">Thank you - your feedback was recorded in this prototype.</p>}
          </form>
        </section>
      </main>

      <footer id="contact" className="footer-section">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Belle & Bloom prototype by Carla</h2>
          <p>Email: <a href="mailto:carla.hajjali@gmail.com">carla.hajjali@gmail.com</a></p>
        </div>
        <a className="secondary-button" href="#top">Back to top</a>
      </footer>

      {selectedProduct && (
        <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="product-title">
          <div className="product-modal">
            <button className="modal-close" onClick={() => setSelectedProduct(null)} aria-label="Close details">×</button>
            <div className="modal-image"><img className="modal-product-image" src={selectedProduct.image} alt={selectedProduct.imageAlt} /></div>
            <div>
              <p className="eyebrow">Product details</p>
              <h2 id="product-title">{selectedProduct.name}</h2>
              <p>{selectedProduct.description}</p>
              <ul>
                {selectedProduct.details.map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
              <p><strong>${selectedProduct.price.toFixed(2)} CAD</strong></p>
              <button className="primary-button" onClick={() => { addToCart(selectedProduct); setSelectedProduct(null); }}>Add to bag</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function FilterGroup({ title, values, selected, onToggle }) {
  return (
    <div className="filter-block">
      <h3>{title}</h3>
      <div className="filter-options">
        {values.map((value) => (
          <label className="checkbox-row" key={value}>
            <input type="checkbox" checked={selected.includes(value)} onChange={() => onToggle(value)} />
            {value}
          </label>
        ))}
      </div>
    </div>
  );
}

function StepIndicator({ current }) {
  return (
    <ol className="stepper" aria-label="Checkout progress">
      {steps.map((step, index) => (
        <li key={step} className={index < current ? 'done' : index === current ? 'active' : ''}>
          <span>{index + 1}</span>
          {step}
        </li>
      ))}
    </ol>
  );
}

function CartStep({ cart, changeQuantity, total }) {
  return (
    <div>
      <h3>Step 1: Review your bag</h3>
      {cart.length === 0 ? <p>Your bag is empty. Add a product before continuing.</p> : cart.map((item) => (
        <div className="cart-row" key={item.id}>
          <span className="cart-icon"><img className="cart-image" src={item.image} alt="" aria-hidden="true" /></span>
          <div>
            <strong>{item.name}</strong>
            <p>${item.price.toFixed(2)} CAD</p>
          </div>
          <div className="quantity-controls">
            <button onClick={() => changeQuantity(item.id, -1)} aria-label={`Decrease ${item.name}`}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => changeQuantity(item.id, 1)} aria-label={`Increase ${item.name}`}>+</button>
          </div>
        </div>
      ))}
      <strong>Bag total: ${total.toFixed(2)} CAD</strong>
    </div>
  );
}

function InformationStep({ customer, setCustomer }) {
  return (
    <div>
      <h3>Step 2: Enter personal information</h3>
      <div className="form-grid">
        <label>Name<input value={customer.name} onChange={(event) => setCustomer({ ...customer, name: event.target.value })} placeholder="Carla Hajj Ali" /></label>
        <label>Email<input value={customer.email} onChange={(event) => setCustomer({ ...customer, email: event.target.value })} placeholder="name@example.com" /></label>
        <label>Address<input value={customer.address} onChange={(event) => setCustomer({ ...customer, address: event.target.value })} placeholder="Street address" /></label>
        <label>City<input value={customer.city} onChange={(event) => setCustomer({ ...customer, city: event.target.value })} placeholder="Ottawa" /></label>
      </div>
    </div>
  );
}

function PaymentStep({ customer, setCustomer, total }) {
  return (
    <div>
      <h3>Step 3: Payment information</h3>
      <p>This is a prototype form only. Do not enter real payment information.</p>
      <div className="form-grid">
        <label>Card number<input value={customer.card} onChange={(event) => setCustomer({ ...customer, card: event.target.value })} placeholder="0000 0000 0000 0000" /></label>
        <label>Expiry date<input value={customer.expiry} onChange={(event) => setCustomer({ ...customer, expiry: event.target.value })} placeholder="MM/YY" /></label>
      </div>
      <p className="payment-note">Amount to confirm: ${total.toFixed(2)} CAD</p>
    </div>
  );
}

function ConfirmationStep({ customer, total }) {
  return (
    <div className="confirmation-box">
      <h3>Step 4: Confirmation</h3>
      <p>Thank you{customer.name ? `, ${customer.name}` : ''}! Your prototype order has been confirmed.</p>
      <p>Confirmation total: ${total.toFixed(2)} CAD</p>
      <p>A real e-commerce site would now send an email receipt and delivery updates.</p>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
