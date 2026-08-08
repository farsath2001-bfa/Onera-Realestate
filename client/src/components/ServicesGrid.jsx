import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import services from '../data/services';
import useFadeIn from '../hooks/useFadeIn';

function ServicesGrid() {
  const [ref, isVisible] = useFadeIn();

  return (
    <section className="services-grid py-5" ref={ref}>
      <Container>
        <h2 className="text-center mb-5">Smart Real Estate Solutions Built for Long-Term Value</h2>

        {/* Desktop grid — hidden below lg breakpoint */}
        <Row className={`g-4 d-none d-lg-flex fade-in-section ${isVisible ? 'visible' : ''}`}>
          {services.map((s) => (
            <Col md={6} lg={4} key={s.slug}>
              <Link to={`/services/${s.slug}`} className="service-card-link">
                <Card className="h-100 service-card">
                  <div className="service-card-image-wrap">
                    <Card.Img variant="top" src={s.image} className="service-card-image" loading="lazy" />
                  </div>
                  <Card.Body>
                    <Card.Title>{s.name}</Card.Title>
                    <Card.Text>{s.summary}</Card.Text>
                    <span className="read-more">Read More →</span>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>

        {/* Mobile/tablet slider — hidden at lg and above */}
        <div className={`services-slider d-flex d-lg-none fade-in-section ${isVisible ? 'visible' : ''}`}>
          {services.map((s) => (
            <Link to={`/services/${s.slug}`} className="service-card-link services-slider-item" key={s.slug}>
              <Card className="h-100 service-card">
                <div className="service-card-image-wrap">
                  <Card.Img variant="top" src={s.image} className="service-card-image" loading="lazy" />
                </div>
                <Card.Body>
                  <Card.Title>{s.name}</Card.Title>
                  <Card.Text>{s.summary}</Card.Text>
                  <span className="read-more">Read More →</span>
                </Card.Body>
              </Card>
            </Link>
          ))}
        </div>
        <p className="services-slider-hint d-lg-none text-center text-muted mt-3">
          Swipe to explore →
        </p>
      </Container>
    </section>
  );
}

export default ServicesGrid;