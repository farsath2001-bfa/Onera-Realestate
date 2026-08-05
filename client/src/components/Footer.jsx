import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import {
  Facebook, Instagram, Linkedin, Whatsapp,
  Envelope, GeoAlt, ArrowRight
} from 'react-bootstrap-icons';
import logo from '../assets/images/Onera-Logo.jpg';

const quickLinks = [
  { name: 'Home', to: '/' },
  { name: 'About Us', to: '/about-us' },
  { name: 'Our Services', to: '/services' },
  { name: 'Contact Us', to: '/contact-us' },
];

function Footer() {
  return (
    <footer className="onera-footer">
      <Container>
        <Row className="py-5">
          <Col md={4} className="mb-4 mb-md-0">
            <div className="footer-brand-wrap">
  <div className="footer-logo-wrap">
    <img src={logo} alt="Onera Real Estate" className="footer-logo" />
  </div>
  <div className="footer-wordmark">
    <span className="footer-wordmark-main">ONERA</span>
    <span className="footer-wordmark-sub">Real Estate</span>
  </div>
</div>
            <p className="mt-3">Spaces That Speak — real estate solutions built on trust, precision, and lasting value.</p>
            <div className="d-flex gap-3 mt-3">
              <a href="https://www.facebook.com/onerarealestate.ae" target="_blank" rel="noreferrer" className="footer-social-icon"><Facebook size={18} /></a>
              <a href="https://www.instagram.com/onerarealestate.ae" target="_blank" rel="noreferrer" className="footer-social-icon"><Instagram size={18} /></a>
              <a href="https://www.linkedin.com/company/onerarealestate" target="_blank" rel="noreferrer" className="footer-social-icon"><Linkedin size={18} /></a>
              <a href={`https://wa.me/971543732303?text=${encodeURIComponent("Hi, I'm interested in Onera Real Estate's services.")}`}
             target="_blank" rel="noreferrer" className="footer-social-icon"><Whatsapp size={18} />
             </a>
            </div>
          </Col>

          <Col md={4} className="mb-4 mb-md-0">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              {quickLinks.map((l) => (
                <li key={l.to} className="mb-2">
                  <Link to={l.to} className="footer-link-item">
                    <ArrowRight size={12} className="footer-link-icon" />
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          <Col md={4}>
            <h5>Contact Info</h5>
            <ul className="list-unstyled">
              <li className="mb-2 d-flex align-items-center gap-2">
                <Whatsapp className="footer-contact-icon" size={16} />
                <a href="https://wa.me/971543732303">+971 54 373 2303</a>
              </li>
              <li className="mb-2 d-flex align-items-center gap-2">
                <Envelope className="footer-contact-icon" size={16} />
                <a href="mailto:ahlam@onera.ae">ahlam@onera.ae</a>
              </li>
              <li className="mb-2 d-flex align-items-start gap-2">
                <GeoAlt className="footer-contact-icon mt-1" size={30} />
                <span>Office 503 - Al Reem Tower - Riggat Al Buteen - Dubai, P.O. Box 117906</span>
              </li>
            </ul>
            <div className="footer-map-frame">
              <iframe
                title="Onera Location Map"
                className="footer-map"
                src="https://www.google.com/maps?q=Al+Reem+Tower,+Al+Maktoum+Rd,+Riggat+Al+Buteen,+Dubai&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="text-center py-3 onera-footer-bottom">
            <p className="mb-0">© {new Date().getFullYear()} Onera Real Estate. Design and Develop by Farsath.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;