import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { CheckCircleFill } from 'react-bootstrap-icons';
import slide1 from '../assets/images/guarantee-1.jpg';
import slide2 from '../assets/images/guarantee-2.jpg';
import slide3 from '../assets/images/guarantee-3.jpg';

const slides = [slide1, slide2, slide3];

const guarantees = [
  '12 months of post-sale consultation and guidance',
  'Free property evaluation and investment review',
  'Fully verified documentation and legal transparency',
  'A responsive client service team, always reachable',
  'A client-first approach at every stage of the process',
];

function ServiceGuarantee() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="service-guarantee">
      <div className="guarantee-slideshow">
        {slides.map((src, i) => (
          <div
            key={src}
            className={`guarantee-slide ${i === activeSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
        <div className="guarantee-overlay" />
      </div>

      <Container className="position-relative py-5">
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <p className="section-tag section-tag-light">Service Guarantee</p>
            <h2 className="guarantee-heading">GUARANTEED QUALITY & DEDICATED SUPPORT</h2>
            <p className="mt-3 guarantee-text">
              Every transaction we handle is backed by verified data, honest guidance, and a
              team that stays engaged long after the paperwork is signed. Whether you're buying,
              selling, or investing, our standard doesn't change — because for us, client
              satisfaction is the real measure of a successful deal.
            </p>
          </Col>
          <Col lg={6}>
            <ul className="guarantee-list list-unstyled">
              {guarantees.map((g) => (
                <li key={g} className="d-flex align-items-start mb-3">
                  <CheckCircleFill className="me-2 mt-1 guarantee-icon" />
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ServiceGuarantee;