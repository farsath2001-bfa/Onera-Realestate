import { Container, Row, Col } from 'react-bootstrap';
import usePageTitle from '../hooks/usePageTitle';

function PrivacyPolicy() {
  usePageTitle('Privacy Policy');

  return (
    <Container className="legal-page py-5" style={{ marginTop: '80px' }}>
      <Row>
        <Col lg={8} className="mx-auto">
          <p className="section-tag">Legal</p>
          <h1>Privacy Policy</h1>
          <p className="text-muted mt-2">Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>

          <div className="legal-content mt-4">
            <p>
              Onera Real Estate L.L.C ("Onera," "we," "us," or "our") is committed to protecting
              the privacy of visitors to our website and clients who use our real estate
              services. This Privacy Policy explains how we collect, use, and safeguard your
              information when you interact with us.
            </p>

            <h5>1. Information We Collect</h5>
            <p>When you use our website or contact us, we may collect:</p>
            <ul>
              <li>Full name, email address, and phone number submitted through our contact or booking forms</li>
              <li>Details about the real estate service you are interested in</li>
              <li>Any additional information you choose to share with us regarding your property requirements</li>
            </ul>

            <h5>2. How We Use Your Information</h5>
            <p>We use the information you provide to:</p>
            <ul>
              <li>Respond to your inquiries and provide requested real estate services</li>
              <li>Contact you regarding property opportunities, consultations, or updates you have requested</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations under UAE law</li>
            </ul>

            <h5>3. How We Protect Your Information</h5>
            <p>
              We take reasonable technical and organizational measures to protect your personal
              information from unauthorized access, alteration, disclosure, or destruction. Data
              submitted through our booking form is stored securely and access is restricted to
              authorized personnel only.
            </p>

            <h5>4. Sharing of Information</h5>
            <p>
              We do not sell, rent, or trade your personal information to third parties. Your
              information may only be shared with trusted service providers who assist us in
              operating our website and conducting our business, and who agree to keep this
              information confidential.
            </p>

            <h5>5. Cookies</h5>
            <p>
              Our website may use cookies to enhance your browsing experience. You can choose to
              disable cookies through your browser settings, though this may affect certain
              website features.
            </p>

            <h5>6. Your Rights</h5>
            <p>
              You have the right to request access to, correction of, or deletion of your
              personal data held by us. To exercise these rights, please contact us using the
              details below.
            </p>

            <h5>7. Changes to This Policy</h5>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on
              this page with an updated revision date.
            </p>

            <h5>8. Contact Us</h5>
            <p>
              If you have questions about this Privacy Policy or how your information is
              handled, please contact us:
            </p>
            <ul className="legal-contact-list">
              <li>Onera Real Estate L.L.C</li>
              <li>Office 503, Al Reem Tower - Riggat Al Buteen - Dubai, UAE</li>
              <li>Email: <a href="mailto:ahlam@onera.ae">ahlam@onera.ae</a></li>
              <li>Phone: <a href="tel:+971543732303">+971 54 373 2303</a></li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default PrivacyPolicy;