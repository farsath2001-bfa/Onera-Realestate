import { Container, Row, Col } from 'react-bootstrap';

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
  return (
    <section className="process-steps py-5">
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
        <Row className="g-4">
          {steps.map((s) => (
            <Col md={6} lg={3} key={s.number}>
              <div className="step-card">
                <p className="step-number">{s.number}</p>
                <h5>{s.title}</h5>
                <p className="text-muted">{s.text}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default ProcessSteps;