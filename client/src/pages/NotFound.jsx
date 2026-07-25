import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

function NotFound() {
  return (
    <Container className="not-found-page">
      <Row>
        <Col lg={6} className="mx-auto text-center">
          <p className="not-found-code">404</p>
          <h1>Page Not Found</h1>
          <p className="text-muted mt-3">
            The page you're looking for doesn't exist or may have been moved.
          </p>
          <Link to="/" className="btn onera-btn mt-4">
            Back to Home
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default NotFound;