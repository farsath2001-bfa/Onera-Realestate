import { useParams, Link, Navigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { CheckCircleFill, ArrowLeft } from 'react-bootstrap-icons';
import services from '../data/services';
import usePageTitle from '../hooks/usePageTitle';

function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  usePageTitle(service ? service.name : 'Service Not Found');

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const related = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="service-detail-hero" style={{ backgroundImage: `url(${service.image})` }}>
        <div className="service-detail-hero-overlay" />
        <Container className="position-relative">
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <p className="section-tag section-tag-light">Our Services</p>
              <h1>{service.name}</h1>
              <p className="lead mt-3">{service.summary}</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="service-detail-body py-5">
        <Container>
          <Link to="/services" className="back-link">
            <ArrowLeft className="me-2" size={16} />
            Back to Services
          </Link>
          <Row className="mt-4">
            <Col lg={7}>
  <h2>Overview</h2>
  <p className="text-muted mt-3">{service.details}</p>
  <div className="d-flex gap-3 flex-wrap mt-4">
    <Link to="/contact-us" className="btn onera-btn">
      Request This Service
    </Link>
    
     <a  href={`https://wa.me/971543732303?text=${encodeURIComponent(`Hi, I'm interested in your ${service.name} service. Could you share more details?`)}`}
      target="_blank"
      rel="noreferrer"
      className="btn onera-btn-outline"
    >
      Chat on WhatsApp
    </a>
  </div>
</Col>
            <Col lg={5}>
              <div className="service-features-box">
                <h5>What's Included</h5>
                <ul className="list-unstyled mt-3">
                  {service.features.map((f) => (
                    <li key={f} className="d-flex align-items-start mb-3">
                      <CheckCircleFill className="me-2 mt-1 service-feature-icon" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="related-services py-5">
        <Container>
          <p className="section-tag">Explore More</p>
          <h2 className="mb-4">Related Services</h2>
          <Row className="g-4">
            {related.map((s) => (
              <Col md={4} key={s.slug}>
                <Link to={`/services/${s.slug}`} className="service-card-link">
                  <div className="related-service-card">
                    <h5>{s.name}</h5>
                    <p className="text-muted">{s.summary}</p>
                    <span className="read-more">Read More →</span>
                  </div>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default ServiceDetail;