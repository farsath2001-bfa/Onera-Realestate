import { Container, Row, Col, Card } from 'react-bootstrap';
import { Quote } from 'react-bootstrap-icons';

const testimonials = [
  {
    quote: "Onera made a complex Dubai Marina purchase feel simple. They handled the details so I didn't have to chase anything myself.",
    name: 'Michael Carter',
    role: 'Investor, Dubai Marina',
  },
  {
    quote: 'From the first call to closing, everything moved fast without ever feeling rushed. Their team was responsive at every step.',
    name: 'Emily Davis',
    role: 'Homebuyer, Downtown Dubai',
  },
  {
    quote: 'I closed on a commercial property in Sharjah with flexible terms that actually worked for my budget — no compromises on location.',
    name: 'Ahmed Al Mansoori',
    role: 'Entrepreneur, Dubai',
  },
];

function Testimonials() {
  return (
    <section className="testimonials py-5">
      <Container>
        <Row>
          <Col lg={8} className="mx-auto text-center mb-5">
            <p className="section-tag">Client Testimonials</p>
            <h2>What Our Clients Say</h2>
            <p className="mt-3 text-muted">
              Real feedback from people who've worked with us on their real estate journey.
            </p>
          </Col>
        </Row>
        <Row className="g-4">
          {testimonials.map((t) => (
            <Col md={4} key={t.name}>
              <Card className="testimonial-card h-100">
                <Card.Body>
                  <Quote className="quote-icon mb-3" />
                  <Card.Text>{t.quote}</Card.Text>
                  <h6 className="mb-0 mt-3">{t.name}</h6>
                  <p className="testimonial-role">{t.role}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Testimonials;