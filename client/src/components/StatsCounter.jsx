import { Container, Row, Col } from 'react-bootstrap';
import statsBg from '../assets/images/stats-bg.jpg';

const stats = [
  { value: 20, suffix: '+', label: 'Years of Real Estate Excellence' },
  { value: 70, suffix: '%', label: 'Client Satisfaction' },
  { value: 10, suffix: '+', label: 'Real Estate Professionals' },
];

function StatsCounter() {
  return (
    <section className="stats-counter" style={{ backgroundImage: `url(${statsBg})` }}>
      <div className="stats-overlay" />
      <Container className="position-relative">
        <Row className="text-center g-4">
          {stats.map((s) => (
            <Col md={4} key={s.label}>
              <h2 className="stat-value">
                {s.value}
                <span className="stat-suffix">{s.suffix}</span>
              </h2>
              <p className="stat-label">{s.label}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default StatsCounter;