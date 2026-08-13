import { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert, FloatingLabel } from 'react-bootstrap';
import axios from 'axios';
import { CheckCircleFill } from 'react-bootstrap-icons';
import services from '../data/services';
import bookingImage from '../assets/images/booking-side.jpg';

function BookingForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await axios.post('https://onera-realestate.onrender.com/api/leads', formData);
      setStatus('success');
      setFormData({ fullName: '', email: '', phone: '', service: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="booking-form-section py-5">
      <Container>
        <Row className="align-items-center g-5">
          <Col lg={6}>
            <div className="booking-image-wrap">
              <img src={bookingImage} alt="Get in touch with Onera Real Estate" className="booking-image" loading="lazy" />
            </div>
          </Col>
          <Col lg={6}>
            {status === 'success' ? (
              <div className="booking-card booking-success text-center">
                <CheckCircleFill size={44} className="booking-success-icon mb-3" />
                <h3>Request Received</h3>
                <p className="text-muted mt-2">
                  Thank you — we've got your details and will reach out shortly to discuss
                  your requirements.
                </p>
                <Button className="onera-btn mt-3" onClick={() => setStatus(null)}>
                  Submit Another Request
                </Button>
              </div>
            ) : (
              <div className="booking-card">
                <p className="section-tag">Get Started</p>
                <h2 className="mb-4">Request Your Services</h2>

                {status === 'error' && <Alert variant="danger">Something went wrong. Please try again.</Alert>}

                <Form onSubmit={handleSubmit}>
                {status === 'loading' && (
                <p className="text-muted text-center mb-3" style={{ fontSize: '13px' }}>
                 This may take up to a minute if our server has been idle — thanks for your patience.
                 </p>
      )}

              <FloatingLabel label="Full Name" className="mb-3" controlId="bookingFullName">
  <Form.Control name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} autoComplete="name" required />
</FloatingLabel>

<FloatingLabel label="Email Address" className="mb-3" controlId="bookingEmail">
  <Form.Control type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} autoComplete="email" required />
</FloatingLabel>

<FloatingLabel label="Phone Number" className="mb-3" controlId="bookingPhone">
  <Form.Control name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} autoComplete="tel" required />
</FloatingLabel>

<FloatingLabel label="Select a Service" className="mb-4" controlId="bookingService">
  <Form.Select name="service" value={formData.service} onChange={handleChange} required>
    <option value="">Select a Service</option>
    {services.map((s) => (
      <option key={s.slug} value={s.name}>{s.name}</option>
    ))}
           </Form.Select>
            </FloatingLabel>

             <Button type="submit" className="onera-btn w-100" disabled={status === 'loading'}>
              {status === 'loading' ? (
                 <>
               <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Submitting...
                </>
               ) : ('Submit Request' )}
               </Button>
              </Form>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default BookingForm;