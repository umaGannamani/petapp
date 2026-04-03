import { Link } from "react-router-dom";

const clinicDetails = {
  name: "Kalyan Pets & Clinic",
  addressLine1: "Doo No :43-106-19, Near Sai Baba Temple",
  addressLine2: "Beside Apollo Pharmacy, Nuzvid Main Road, P&T Colony",
  cityLine: "Singh Nagar, Vijayawada - 520015, Andhra Pradesh",
  hours: "Mon-Sun: 9:00 AM - 10:00 PM",
  specialties: "Pet Clinic, Veterinary Care, Pet Food, Dog Accessories",
  mapUrl: "https://maps.google.com/?q=16.5416181,80.6375518",
  listingUrl:
    "https://www.justdial.com/Vijayawada/Kalyan-Pets-Clinic-Near-Sai-Baba-Temple-Beside-Apollo-Pharmacy-Singh-Nagar/0866PX866-X866-230803161734-T1Q8_BZDET",
};

const footerLogoUrl =
  "https://res.cloudinary.com/dlx9tnj7p/image/upload/v1775200169/Kalyaan_Pet_Shop_logo_design_qxfec5.png";

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1-.24 11.36 11.36 0 0 0 3.56.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.49a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.56 1 1 0 0 1-.25 1.01Z"
        fill="currentColor"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 17.5Zm1.8.32 6.2 4.66 6.2-4.66A1 1 0 0 0 17.5 6h-11a1 1 0 0 0-.7.82ZM18 8.35l-5.4 4.05a1 1 0 0 1-1.2 0L6 8.35v9.15c0 .28.22.5.5.5h11c.28 0 .5-.22.5-.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 3.2A8.8 8.8 0 0 0 4.49 16.6L3.2 20.8l4.33-1.24A8.8 8.8 0 1 0 12 3.2Zm0 15.85a7.02 7.02 0 0 1-3.56-.97l-.25-.15-2.57.74.77-2.5-.16-.26A7.04 7.04 0 1 1 12 19.05Zm3.86-5.26c-.21-.11-1.24-.61-1.44-.68-.19-.07-.33-.11-.47.1-.14.22-.54.68-.66.82-.12.15-.24.16-.45.06-.21-.1-.87-.32-1.66-1.03-.61-.54-1.02-1.21-1.14-1.42-.12-.21-.01-.32.09-.42.1-.1.21-.24.31-.36.11-.12.14-.21.21-.35.07-.15.04-.27-.02-.38-.06-.11-.47-1.13-.64-1.54-.17-.42-.34-.36-.47-.36h-.4a.78.78 0 0 0-.57.27c-.2.21-.76.75-.76 1.82s.78 2.11.89 2.26c.11.15 1.52 2.32 3.68 3.25.51.22.91.35 1.22.45.51.16.97.14 1.34.09.41-.06 1.24-.51 1.42-1 .18-.49.18-.91.13-1-.05-.1-.19-.15-.4-.26Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="nav-logo footer-logo" aria-label="Kalyan Pet Shop">
              <img
                src={footerLogoUrl}
                alt="Kalyan Pet Shop"
                className="nav-logo-image"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </Link>
            <p>Your one-stop destination for premium pet products, expert care, and happy pets.</p>
            <div className="footer-contact-row">
              <a href="tel:08008882383" className="footer-contact-link" aria-label="Call 080088 82383">
                <span className="footer-social-link">
                  <PhoneIcon />
                </span>
              </a>
              <span className="footer-social-link footer-social-static" aria-label="Email">
                <MailIcon />
              </span>
              <a
                href="https://wa.me/918008882383"
                className="footer-social-link"
                aria-label="Chat on WhatsApp"
                target="_blank"
                rel="noreferrer"
              >
                <WhatsAppIcon />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/doctors">Doctors</Link></li>
              <li><Link to="/login">Login / Register</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><a href="#">Pet Grooming</a></li>
              <li><a href="#">Vaccination</a></li>
              <li><a href="#">Dental Care</a></li>
              <li><a href="#">Emergency Care</a></li>
              <li><a href="#">Nutrition Advice</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact Us</h4>
            <ul>
              <li>{clinicDetails.name}</li>
              <li>{clinicDetails.addressLine1}</li>
              <li>{clinicDetails.addressLine2}</li>
              <li>{clinicDetails.cityLine}</li>
              <li>{clinicDetails.hours}</li>
              <li>{clinicDetails.specialties}</li>
              <li>
                <a href={clinicDetails.mapUrl} target="_blank" rel="noreferrer">
                  View on Google Maps
                </a>
              </li>
              <li>
                <a href={clinicDetails.listingUrl} target="_blank" rel="noreferrer">
                  View business listing
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>Copyright 2026 PetCare. All rights reserved.</span>
          <span>Made with love for pets everywhere</span>
        </div>
      </div>
    </footer>
  );
}
