import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Signpost, Building, GraphUp, Rulers, HouseGear, ArrowRight, List, X, ChevronDown } from 'react-bootstrap-icons';
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
  const [hidden, setHidden] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (expanded) return; // don't hide/show navbar while mobile menu is open

      const currentScrollY = window.scrollY;

      if (currentScrollY < 80) {
        setHidden(false);
      } else if (currentScrollY > lastScrollY.current) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [expanded]);

  const closeMenu = () => {
    setExpanded(false);
    setServicesOpen(false);
  };

  const toggleMenu = () => {
    setExpanded(!expanded);
    setServicesOpen(false);
  };

  return (
    <Navbar
      expand="lg"
      className={`onera-navbar ${hidden ? 'navbar-hidden' : ''} ${expanded ? 'menu-open' : ''}`}
      fixed="top"
    >
      <Container fluid className="navbar-container">
        <Navbar.Brand as={Link} to="/" className="navbar-brand-wrap" onClick={closeMenu}>
          <div className="navbar-logo-wrap">
            <img src={logo} alt="Onera Real Estate" className="navbar-logo" />
          </div>
          <div className="navbar-wordmark">
            <span className="navbar-wordmark-main">ONERA</span>
            <span className="navbar-wordmark-sub">Real Estate</span>
          </div>
        </Navbar.Brand>

        <button
          className="custom-toggle-btn"
          onClick={toggleMenu}
          aria-label={expanded ? 'Close menu' : 'Open menu'}
          aria-expanded={expanded}
        >
          {expanded ? <X size={26} /> : <List size={26} />}
        </button>

        <div className={`navbar-collapse-custom ${expanded ? 'show' : ''}`}>
          <Nav className="mx-auto align-items-lg-center navbar-links">
            <Nav.Link as={Link} to="/" onClick={closeMenu}>Home</Nav.Link>
            <Nav.Link as={Link} to="/about-us" onClick={closeMenu}>About Us</Nav.Link>

            {/* Desktop dropdown */}
            <div className="services-dropdown-desktop d-none d-lg-block">
              <button className="services-dropdown-trigger" type="button">
                Our Services <ChevronDown size={12} className="ms-1" />
              </button>
              <div className="services-dropdown-menu-desktop">
                <div className="services-dropdown-list">
                  {services.map((s) => {
                    const Icon = serviceIcons[s.slug];
                    return (
                      <Link to={`/services/${s.slug}`} key={s.slug} className="services-dropdown-item" onClick={closeMenu}>
                        <span className="services-dropdown-thumb"><Icon size={20} /></span>
                        <span className="services-dropdown-text">
                          <span className="services-dropdown-name">{s.name}</span>
                          <span className="services-dropdown-summary">{s.summary}</span>
                        </span>
                      </Link>
                    );
                  })}
                </div>
                <Link to="/services" className="services-dropdown-viewall" onClick={closeMenu}>
                  View All Services <ArrowRight size={14} className="ms-1" />
                </Link>
              </div>
            </div>

            {/* Mobile accordion */}
            <div className="services-accordion-mobile d-lg-none">
              <button
                className="services-accordion-trigger"
                type="button"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Our Services
                <ChevronDown size={16} className={`services-accordion-chevron ${servicesOpen ? 'open' : ''}`} />
              </button>
              <div className={`services-accordion-panel ${servicesOpen ? 'open' : ''}`}>
                {services.map((s) => {
                  const Icon = serviceIcons[s.slug];
                  return (
                    <Link to={`/services/${s.slug}`} key={s.slug} className="services-accordion-item" onClick={closeMenu}>
                      <Icon size={18} className="me-2" />
                      {s.name}
                    </Link>
                  );
                })}
                <Link to="/services" className="services-accordion-item services-accordion-viewall" onClick={closeMenu}>
                  View All Services <ArrowRight size={14} className="ms-1" />
                </Link>
              </div>
            </div>

            <Nav.Link as={Link} to="/contact-us" onClick={closeMenu}>Contact Us</Nav.Link>
          </Nav>
          <Link to="/contact-us" className="btn onera-btn navbar-cta-btn" onClick={closeMenu}>
            Get In Touch
          </Link>
        </div>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;