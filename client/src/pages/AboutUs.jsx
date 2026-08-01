import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Compass, PeopleFill, ShieldCheck } from 'react-bootstrap-icons';
import aboutImage from '../assets/images/about-intro.jpg';
import usePageTitle from '../hooks/usePageTitle';
import aboutBg from '../assets/images/About.jpg';

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

function AboutUs() {
   usePageTitle('About Us');
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
                Onera Real Estate offers sales, purchase, and rental services with expertise and professionalism — meeting the needs of individuals and investors across the UAE.
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

      <section className="founder-section py-5">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={4} className="text-center">
              <div className="founder-avatar">EAD</div>
            </Col>
            <Col lg={8}>
              <p className="section-tag">Meet the Founder</p>
              <h2>Eng. Ahlam Darawsheh</h2>
              <p className="founder-role">Founder & CEO, Onera Real Estate</p>
              <p className="text-muted mt-3">
                With 20 years of real estate experience, Eng. Ahlam Darawsheh founded Onera Real
                Estate to bring a more personal, trust-first approach to the UAE property market
                — one built on transparency, precision, and long-term client relationships. Under
                her leadership, Onera has grown into a name known for reliable guidance and
                results that speak for themselves.
              </p>
              <div className="founder-contact mt-4">
                <a href="mailto:ahlam@onera.ae">ahlam@onera.ae</a>
                <span className="founder-contact-divider">•</span>
                <a href="tel:+971543732303">+971 54 373 2303</a>
              </div>
              <Link to="/contact-us" className="btn onera-btn mt-4">
                Get In Touch
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default AboutUs;