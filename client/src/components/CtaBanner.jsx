import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRight } from 'react-bootstrap-icons';

function CtaBanner() {
  return (
    <section className="cta-banner">
      <Container>
        <Row className="align-items-center">
          <Col lg={7}>
            <h2>Ready to Find Your Next Opportunity?</h2>
            <p className="mt-2 mb-0">
              Whether you're buying, selling, or investing — let's start the conversation today.
            </p>
          </Col>
          <Col lg={5} className="text-lg-end mt-4 mt-lg-0">
            <Link to="/contact-us" className="btn cta-banner-btn">
              Get In Touch <ArrowRight size={16} className="ms-2" />
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default CtaBanner;