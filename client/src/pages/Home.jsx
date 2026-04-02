import { Link } from "react-router-dom";

const offers = [
  {
    gradient: "linear-gradient(135deg,#0d9488,#0ea5e9)",
    badge: "📦 Free Shipping",
    title: "Free Delivery on Orders Over $40",
    desc: "Get premium pet food and accessories delivered straight to your door at no extra cost.",
    cta: "Shop Now",
    to: "/products",
    emoji: "🚚",
  },
  {
    gradient: "linear-gradient(135deg,#f59e0b,#ef4444)",
    badge: "💉 Health Deal",
    title: "Free Checkup With Every Vaccination",
    desc: "Book a vaccination appointment and receive a complimentary health check for your pet.",
    cta: "Book Now",
    to: "/doctors",
    emoji: "💉",
  },
  {
    gradient: "linear-gradient(135deg,#8b5cf6,#ec4899)",
    badge: "✂️ Grooming",
    title: "10% Off Your First Grooming Session",
    desc: "New customers receive a special discount on our professional grooming service.",
    cta: "Learn More",
    to: "/services",
    emoji: "✂️",
  },
];

const products = [
  { id: 1, emoji: "🦴", name: "Premium Dog Kibble", cat: "Dog Food", price: "$18.99", stars: "★★★★★" },
  { id: 2, emoji: "🐟", name: "Tuna & Shrimp Cat Treats", cat: "Cat Food", price: "$7.49", stars: "★★★★☆" },
  { id: 3, emoji: "🐾", name: "Paw-Print Collar", cat: "Accessory", price: "$12.99", stars: "★★★★★" },
  { id: 4, emoji: "🏡", name: "Orthopedic Pet Bed", cat: "Beds", price: "$34.99", stars: "★★★★☆" },
  { id: 5, emoji: "🎾", name: "Interactive Fetch Ball", cat: "Toys", price: "$8.99", stars: "★★★★★" },
  { id: 6, emoji: "💊", name: "Daily Multivitamin Chews", cat: "Health", price: "$22.99", stars: "★★★★☆" },
];

const services = [
  { icon: "✂️", name: "Pet Grooming", desc: "Professional bathing, trimming, and breed-specific styling for all pets.", price: "from $25" },
  { icon: "💉", name: "Vaccination", desc: "Complete vaccination programs to keep your pets safe and healthy.", price: "from $30" },
  { icon: "🦷", name: "Dental Care", desc: "Professional dental cleaning and oral health assessments by expert vets.", price: "from $40" },
  { icon: "🏥", name: "Emergency Care", desc: "Round-the-clock emergency veterinary services when you need them most.", price: "Call for rates" },
];

const doctors = [
  { id: 1, avatar: "👨‍⚕️", name: "Dr. Samuel Rivera", spec: "General Veterinarian", exp: "12 yrs exp", rating: "★★★★★ 4.9", avail: "Mon–Fri" },
  { id: 2, avatar: "👩‍⚕️", name: "Dr. Priya Nair", spec: "Animal Surgeon", exp: "9 yrs exp", rating: "★★★★★ 4.8", avail: "Mon–Sat" },
  { id: 3, avatar: "👨‍⚕️", name: "Dr. James Okafor", spec: "Pet Behaviourist", exp: "7 yrs exp", rating: "★★★★☆ 4.6", avail: "Tue–Sat" },
];

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <span className="hero-badge">🐾 Trusted Pet Care Platform</span>
          <h1>
            Your Pet Deserves <span>The Best Care</span>
          </h1>
          <p>
            Shop premium pet products, book expert vet appointments, and access
            world-class grooming — all in one place.
          </p>
          <div className="hero-btns">
            <Link to="/products" className="btn btn-accent">
              Shop Products
            </Link>
            <Link
              to="/doctors"
              className="btn btn-outline"
              style={{ borderColor: "#fff", color: "#fff" }}
            >
              Book Appointment
            </Link>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <strong>5,000+</strong>
              <span>Happy Pets</span>
            </div>
            <div className="hero-stat">
              <strong>50+</strong>
              <span>Expert Vets</span>
            </div>
            <div className="hero-stat">
              <strong>200+</strong>
              <span>Products</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Offers() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Special Offers</h2>
        <p className="section-sub">Exclusive deals crafted for you and your beloved pets</p>
        <div className="offers-grid">
          {offers.map((offer, i) => (
            <div
              key={i}
              className="offer-card"
              style={{ background: offer.gradient }}
              data-emoji={offer.emoji}
            >
              <span className="offer-badge">{offer.badge}</span>
              <h3>{offer.title}</h3>
              <p>{offer.desc}</p>
              <Link to={offer.to} className="btn btn-sm">
                {offer.cta} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductsSection() {
  return (
    <section className="section section-alt">
      <div className="container">
        <h2 className="section-title">Popular Products</h2>
        <p className="section-sub">Hand-picked essentials for happy, healthy pets</p>
        <div className="products-grid">
          {products.map((p) => (
            <div key={p.id} className="product-card">
              <div className="product-img">{p.emoji}</div>
              <div className="product-body">
                <span className="product-cat">{p.cat}</span>
                <p className="product-name">{p.name}</p>
                <p className="product-star">{p.stars}</p>
                <p className="product-price">{p.price}</p>
                <div className="product-actions">
                  <button className="btn btn-primary btn-sm" style={{ flex: 1 }}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="view-all-wrap">
          <Link to="/products" className="btn btn-outline">
            View All Products →
          </Link>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-sub">Professional care services for every kind of pet</p>
        <div className="services-grid">
          {services.map((s, i) => (
            <div key={i} className="service-card">
              <span className="service-icon">{s.icon}</span>
              <h3>{s.name}</h3>
              <p>{s.desc}</p>
              <span className="service-price">{s.price}</span>
            </div>
          ))}
        </div>
        <div className="view-all-wrap">
          <Link to="/services" className="btn btn-outline">
            Explore All Services →
          </Link>
        </div>
      </div>
    </section>
  );
}

function DoctorsSection() {
  return (
    <section className="section section-alt">
      <div className="container">
        <h2 className="section-title">Meet Our Doctors</h2>
        <p className="section-sub">Certified veterinary professionals dedicated to your pet's health</p>
        <div className="doctors-grid">
          {doctors.map((d) => (
            <div key={d.id} className="doctor-card">
              <div className="doctor-avatar">{d.avatar}</div>
              <h3 className="doctor-name">{d.name}</h3>
              <p className="doctor-spec">{d.spec}</p>
              <p className="doctor-rating">{d.rating}</p>
              <p className="doctor-info">
                {d.exp} · Available {d.avail}
              </p>
              <Link to="/doctors" className="btn btn-primary btn-sm">
                Book Appointment
              </Link>
            </div>
          ))}
        </div>
        <div className="view-all-wrap">
          <Link to="/doctors" className="btn btn-outline">
            View All Doctors →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Offers />
      <ProductsSection />
      <ServicesSection />
      <DoctorsSection />
    </>
  );
}
