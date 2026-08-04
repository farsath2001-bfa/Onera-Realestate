import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Signpost, Building, GraphUp, Rulers, HouseGear, ArrowRight } from 'react-bootstrap-icons';
import logo from '../assets/images/Onera-Logo.jpg';
import services from '../data/services';

const serviceIcons = {
  'land-sales-marketing': Signpost,
  'property-hotel-sales': Building,
  'real-estate-investment': GraphUp,
  'feasibility-engineering-studies': Rulers,
  'property-management': HouseGear,
};

function AppNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar expand="lg" className={`onera-navbar ${scrolled ? 'scrolled' : ''}`} fixed="top">
      <Container fluid className="navbar-container">
        <Navbar.Brand as={Link} to="/" className="navbar-brand-wrap">
          <img src={logo} alt="Onera Real Estate" className="navbar-logo" />
          <div className="navbar-wordmark">
            <span className="navbar-wordmark-main">ONERA</span>
            <span className="navbar-wordmark-sub">Real Estate</span>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="mx-auto align-items-lg-center navbar-links">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about-us">About Us</Nav.Link>
            <NavDropdown title="Our Services" id="services-dropdown" className="services-dropdown" align="center">
              <div className="services-dropdown-list">
                {services.map((s) => {
                  const Icon = serviceIcons[s.slug];
                  return (
                    <NavDropdown.Item as={Link} to={`/services/${s.slug}`} key={s.slug} className="services-dropdown-item">
                      <span className="services-dropdown-thumb">
                        <Icon size={20} />
                      </span>
                      <span className="services-dropdown-text">
                        <span className="services-dropdown-name">{s.name}</span>
                        <span className="services-dropdown-summary">{s.summary}</span>
                      </span>
                    </NavDropdown.Item>
                  );
                })}
              </div>
              <Link to="/services" className="services-dropdown-viewall">
                View All Services <ArrowRight size={14} className="ms-1" />
              </Link>
            </NavDropdown>
            <Nav.Link as={Link} to="/contact-us">Contact Us</Nav.Link>
          </Nav>
          <Link to="/contact-us" className="btn onera-btn navbar-cta-btn">
            Get In Touch
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;