import { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import statsBg from '../assets/images/stats-bg.jpg';

const stats = [
  { value: 20, suffix: '+', label: 'Years of Real Estate Excellence' },
  { value: 90, suffix: '%', label: 'Client Satisfaction' },
  { value: 10, suffix: '+', label: 'Real Estate Professionals' },
];

function useCountUp(target, shouldStart, duration = 1500) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime = null;
    let animationFrame;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [shouldStart, target, duration]);

  return count;
}

function StatItem({ value, suffix, label, shouldStart }) {
  const count = useCountUp(value, shouldStart);
  return (
    <Col md={4}>
      <h2 className="stat-value">
        {count}
        <span className="stat-suffix">{suffix}</span>
      </h2>
      <p className="stat-label">{label}</p>
    </Col>
  );
}

function StatsCounter() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="stats-counter"
      style={{ backgroundImage: `url(${statsBg})` }}
      ref={sectionRef}
    >
      <div className="stats-overlay" />
      <Container className="position-relative">
        <Row className="text-center g-4">
          {stats.map((s) => (
            <StatItem key={s.label} {...s} shouldStart={inView} />
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default StatsCounter;