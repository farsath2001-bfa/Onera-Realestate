import { Container, Row, Col } from 'react-bootstrap';
import useFadeIn from '../hooks/useFadeIn';

const steps = [
  {
    number: 'STEP 1',
    title: 'REQUEST A CONSULTATION',
    text: 'Call us or submit your inquiry with your property goals. Our team will connect with you for a personalized consultation.',
  },
  {
    number: 'STEP 2',
    title: 'RECEIVE A CUSTOM STRATEGY',
    text: "We prepare a tailored action plan with clear steps and timelines, whether you're buying, selling, investing, or forming partnerships.",
  },
  {
    number: 'STEP 3',
    title: 'IMPLEMENTATION',
    text: 'Our experts handle legal, financial, and market processes to execute your transaction or project with precision.',
  },
  {
    number: 'STEP 4',
    title: 'CLOSING & ONGOING SUPPORT',
    text: 'We finalize the deal seamlessly and continue to support you post-transaction to ensure satisfaction and long-term success.',
  },
];

function ProcessSteps() {
  const [ref, isVisible] = useFadeIn();

  return (
    <section className="process-steps py-5" ref={ref}>
      <Container>
        <Row>
          <Col lg={8} className="mx-auto text-center mb-5">
            <p className="section-tag">Work Process</p>
            <h2>OUR SEAMLESS REAL ESTATE PROCESS</h2>
            <p className="mt-3 text-muted">
              From consultation to closing, Onera Real Estate ensures transparency, precision,
              and a smooth experience at every stage of your real estate journey.
            </p>
          </Col>
        </Row>
        <Row className={`g-4 fade-in-section process-steps-row ${isVisible ? 'visible' : ''}`}>
          {steps.map((s, index) => (
            <Col md={6} lg={3} key={s.number} className="process-step-col">
              <div className="step-card">
                <div className="step-number-circle">{index + 1}</div>
                <p className="step-number">{s.number}</p>
                <h5>{s.title}</h5>
                <p className="text-muted">{s.text}</p>
              </div>
              {index < steps.length - 1 && <div className="step-connector d-none d-lg-block" />}
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default ProcessSteps;