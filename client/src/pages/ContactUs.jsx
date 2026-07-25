import { Container, Row, Col } from 'react-bootstrap';
import { Whatsapp, Envelope, GeoAlt, Clock } from 'react-bootstrap-icons';
import BookingForm from '../components/BookingForm';
import usePageTitle from '../hooks/usePageTitle';


const whatsappMessage = encodeURIComponent(
  "Hi, I'd like to know more about Onera Real Estate's services."
);

const contactCards = [
  {
    icon: Whatsapp,
    label: 'WhatsApp',
    value: '+971 54 373 2303',
    href: `https://wa.me/971543732303?text=${whatsappMessage}`,
  },
  {
    icon: Envelope,
    label: 'Email',
    value: 'ahlam@onera.ae',
    href: 'mailto:ahlam@onera.ae',
  },
  {
    icon: GeoAlt,
    label: 'Office',
    value: 'Al Reem Tower, Office 503, Dubai',
    href: null,
  },
  {
    icon: Clock,
    label: 'Working Hours',
    value: 'Sat - Thu: 10:00 AM – 7:00 PM',
    href: null,
  },
];

function ContactUs() {
  usePageTitle('Contact Us');
  return (
    <>
      <section className="contact-hero">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <p className="section-tag section-tag-light">Get In Touch</p>
              <h1>We're Here to Help</h1>
              <p className="lead mt-3">
                Whether you're buying, selling, or investing — reach out and our team will
                respond promptly.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <Container className="contact-cards-section">
        <Row className="g-4">
          {contactCards.map((c) => {
            const Icon = c.icon;
            const content = (
              <div className="contact-card text-center">
                <div className="feature-icon-circle">
                  <Icon size={24} />
                </div>
                <p className="contact-card-label">{c.label}</p>
                <p className="contact-card-value">{c.value}</p>
              </div>
            );
            return (
              <Col md={3} sm={6} key={c.label}>
                {c.href ? <a href={c.href} className="contact-card-link">{content}</a> : content}
              </Col>
            );
          })}
        </Row>
      </Container>

      <section className="contact-map-section py-5">
        <Container>
          <Row>
            <Col lg={10} className="mx-auto">
              <div className="map-frame">
                <iframe
                  title="Onera Real Estate Location"
                  className="contact-map"
                  src="https://www.google.com/maps?q=Al+Reem+Tower,+Al+Maktoum+Rd,+Riggat+Al+Buteen,+Dubai&output=embed"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <BookingForm />
    </>
  );
}

export default ContactUs;