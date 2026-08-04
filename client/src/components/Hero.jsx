import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import heroVideo from '../assets/videos/hero-bg.mp4';

function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.4);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="onera-hero">
      <video className="onera-hero-video" autoPlay muted loop playsInline>
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="onera-hero-overlay" />
      <Container
        className="position-relative"
        style={{
          transform: `translateY(${offset}px)`,
          opacity: Math.max(1 - offset / 300, 0),
        }}
      >
        <Row>
          <Col lg={8} className="mx-auto text-center">
            <h1>
              Real Estate, <span className="text-accent">Reimagined</span><br />
              for Dubai's Future
            </h1>
            <p className="lead mt-3">
              Onera Real Estate helps landowners, investors, and developers turn opportunity
              into lasting value — backed by two decades of market expertise and a genuinely
              personal approach.
            </p>
            <div className="d-flex gap-3 justify-content-center mt-4 flex-wrap">
              <Link to="/services/land-sales-marketing" className="btn onera-btn">
                Explore Properties
              </Link>
              <Link to="/contact-us" className="btn onera-btn-outline-light">
                Book a Consultation
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;