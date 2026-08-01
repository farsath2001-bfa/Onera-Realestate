import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import services from '../data/services';

function ServicesGrid() {
  return (
    <section className="services-grid py-5">
      <Container>
        <h2 className="text-center mb-5">Smart Real Estate Solutions Built for Long-Term Value</h2>
        <Row className="g-4">
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
      </Container>
    </section>
  );
}

export default ServicesGrid;