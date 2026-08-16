import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    setVisible(false);
  };

  const handleDecline = () => {
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-consent">
      <Container>
        <Row className="align-items-center g-3">
          <Col md={8}>
            <p className="cookie-consent-text mb-0">
              We use cookies to improve your browsing experience on our website. By continuing
              to use this site, you agree to our use of cookies as described in our{' '}
              <Link to="/privacy-policy">Privacy Policy</Link>.
            </p>
          </Col>
          <Col md={4} className="text-md-end">
            <button className="btn onera-btn-outline cookie-btn-decline" onClick={handleDecline}>
              Decline
            </button>
            <button className="btn onera-btn cookie-btn-accept" onClick={handleAccept}>
              Accept
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CookieConsent;