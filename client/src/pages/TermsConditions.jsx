import { Container, Row, Col } from 'react-bootstrap';
import usePageTitle from '../hooks/usePageTitle';

function TermsConditions() {
  usePageTitle('Terms & Conditions');

  return (
    <Container className="legal-page py-5" style={{ marginTop: '80px' }}>
      <Row>
        <Col lg={8} className="mx-auto">
          <p className="section-tag">Legal</p>
          <h1>Terms & Conditions</h1>
          <p className="text-muted mt-2">Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>

          <div className="legal-content mt-4">
            <p>
              These Terms and Conditions ("Terms") govern your use of the Onera Real Estate
              L.L.C ("Onera," "we," "us," or "our") website and the real estate services we
              provide. By accessing our website or engaging our services, you agree to these
              Terms.
            </p>

            <h5>1. About Our Services</h5>
            <p>
              Onera Real Estate offers real estate sales, purchase, and rental services,
              including land sales and marketing, property and hotel sales, real estate
              investment guidance, feasibility and engineering studies, and property management,
              serving individuals and investors across the UAE.
            </p>

            <h5>2. Use of Our Website</h5>
            <p>
              You agree to use our website only for lawful purposes and in a manner that does
              not infringe the rights of, or restrict or inhibit the use of, this website by any
              third party. Content on this website, including text, images, and branding, is the
              property of Onera Real Estate and may not be reproduced without permission.
            </p>

            <h5>3. Inquiries and Booking Requests</h5>
            <p>
              Submitting an inquiry or booking request through our website does not constitute a
              binding agreement between you and Onera Real Estate. All property transactions,
              consultations, and services are subject to separate agreements to be signed
              between the client and Onera Real Estate.
            </p>

            <h5>4. No Guarantee of Property Availability or Pricing</h5>
            <p>
              Information on our website regarding services, properties, or general market
              conditions is provided for general informational purposes only and does not
              constitute a guarantee, offer, or binding commitment. Property availability,
              pricing, and terms are subject to change and confirmation at the time of
              transaction.
            </p>

            <h5>5. Professional Advice Disclaimer</h5>
            <p>
              Content on this website is not intended as legal, financial, or investment advice.
              We recommend seeking independent professional advice before making any real estate
              investment or purchase decision.
            </p>

            <h5>6. Limitation of Liability</h5>
            <p>
              To the fullest extent permitted by UAE law, Onera Real Estate shall not be liable
              for any indirect, incidental, or consequential damages arising from your use of
              this website or reliance on information provided herein.
            </p>

            <h5>7. Governing Law</h5>
            <p>
              These Terms are governed by the laws of the United Arab Emirates and the Emirate
              of Dubai. Any disputes arising from these Terms or our services shall be subject
              to the exclusive jurisdiction of the courts of Dubai, UAE.
            </p>

            <h5>8. Changes to These Terms</h5>
            <p>
              We reserve the right to update these Terms at any time. Continued use of our
              website following any changes constitutes acceptance of the revised Terms.
            </p>

            <h5>9. Contact Us</h5>
            <p>For any questions regarding these Terms, please contact us:</p>
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

export default TermsConditions;