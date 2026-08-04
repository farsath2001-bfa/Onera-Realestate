import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Compass, PeopleFill, ShieldCheck, ArrowRight } from 'react-bootstrap-icons';
import aboutImage from '../assets/images/about-intro.jpg';
import aboutBg from '../assets/images/About.jpg';
import useFadeIn from '../hooks/useFadeIn';

const values = [
  {
    icon: Compass,
    title: 'Continuity',
    text: "The real estate market never stands still — and neither do we. We grow with it, steadily and confidently, so our clients always have current, reliable guidance.",
  },
  {
    icon: PeopleFill,
    title: 'Connection',
    text: 'Every relationship we build is grounded in transparency, professionalism, and results that speak for themselves — not just promises.',
  },
  {
    icon: ShieldCheck,
    title: 'Excellence',
    text: 'From the properties we represent to the way we communicate, we hold every detail to a standard that reflects genuine care, not just competence.',
  },
];

const milestones = [
  { year: '4 Years', label: 'Onera Real Estate Established' },
  { year: '20+ Years', label: 'Combined Market Experience' },
  { year: '70%', label: 'Client Satisfaction Rate' },
  { year: 'Today', label: 'Trusted Across the UAE Market' },
];

const processSteps = [
  {
    number: '01',
    title: 'Consultation',
    text: 'We start by understanding your goals — whether buying, selling, or investing.',
  },
  {
    number: '02',
    title: 'Strategy',
    text: 'A clear, tailored plan built around your timeline and priorities.',
  },
  {
    number: '03',
    title: 'Execution',
    text: 'We handle the details, keep you informed, and stay involved past closing.',
  },
];

function AboutUs() {
  const [milestonesRef, milestonesVisible] = useFadeIn();
  const [processRef, processVisible] = useFadeIn();

  return (
    <>
      <section className="about-hero" style={{ backgroundImage: `url(${aboutBg})` }}>
        <div className="about-hero-overlay" />
        <Container className="position-relative">
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <p className="section-tag section-tag-light">About Onera</p>
              <h1>A Real Estate Company Built on Trust</h1>
              <p className="lead mt-3">
                Onera Real Estate offers sales, purchase, and rental services with expertise and
                professionalism — meeting the needs of individuals and investors across the UAE.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="about-intro py-5">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <div className="about-intro-image-wrap">
                <img src={aboutImage} alt="Onera Real Estate" className="about-intro-image" loading="lazy" />
              </div>
            </Col>
            <Col lg={6}>
              <p className="section-tag">Who We Are</p>
              <h2>A Name Built Over Two Decades</h2>
              <p className="mt-3 text-muted">
                What began as a vision for a more personal approach to real estate has grown
                into a name UAE clients recognize and trust. We don't treat transactions as
                one-off events — every deal is a relationship, and every client leaves with more
                than just a signed contract.
              </p>
              <p className="mt-3 text-muted">
                From landowners exploring their first sale to institutional investors managing
                complex portfolios, our approach stays the same: listen first, advise honestly,
                and stay involved long after the ink dries.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="about-tagline py-5">
        <Container>
          <Row>
            <Col lg={7} className="mx-auto text-center">
              <p className="about-tagline-quote">"Spaces That Speak"</p>
              <p className="text-muted">
                Our promise that each property tells its own story, mirrors your identity, and
                resonates with you from the very first look.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="about-values py-5">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center mb-5">
              <p className="section-tag">What Drives Us</p>
              <h2>Real Inspirations</h2>
              <p className="mt-3 text-muted">
                Our visual identity and our values share the same roots — refined simplicity,
                lasting trust, and the meaningful connections that unite clients with properties.
              </p>
            </Col>
          </Row>
          <Row className="g-4">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <Col md={4} key={v.title}>
                  <div className="value-card text-center">
                    <div className="feature-icon-circle">
                      <Icon size={26} />
                    </div>
                    <h5>{v.title}</h5>
                    <p className="text-muted">{v.text}</p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>

      <section className="milestones-section py-5" ref={milestonesRef}>
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center mb-5">
              <p className="section-tag section-tag-light">Our Journey</p>
              <h2 className="milestones-heading">Milestones That Define Us</h2>
            </Col>
          </Row>
          <Row className={`g-4 fade-in-section ${milestonesVisible ? 'visible' : ''}`}>
            {milestones.map((m) => (
              <Col md={3} sm={6} key={m.label}>
                <div className="milestone-card text-center">
                  <p className="milestone-year">{m.year}</p>
                  <p className="milestone-label">{m.label}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="about-process-section py-5" ref={processRef}>
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center mb-5">
              <p className="section-tag">How We Work</p>
              <h2>A Simple, Guided Process</h2>
              <p className="mt-3 text-muted">
                No confusion, no guesswork — just a clear path from your first call to a closed
                deal.
              </p>
            </Col>
          </Row>
          <Row className={`g-4 fade-in-section ${processVisible ? 'visible' : ''}`}>
            {processSteps.map((step) => (
              <Col md={4} key={step.number}>
                <div className="about-process-card">
                  <p className="about-process-number">{step.number}</p>
                  <h5>{step.title}</h5>
                  <p className="text-muted">{step.text}</p>
                </div>
              </Col>
            ))}
          </Row>
          <Row>
            <Col className="text-center mt-4">
              <Link to="/contact-us" className="btn onera-btn">
                Start Your Journey <ArrowRight className="ms-2" size={16} />
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default AboutUs;