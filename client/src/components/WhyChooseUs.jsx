import { Container, Row, Col } from 'react-bootstrap';
import { PersonCheck, Award, ShieldCheck } from 'react-bootstrap-icons';
import whyImage from '../assets/images/why-choose-us.jpg';

const features = [
  {
    icon: PersonCheck,
    title: 'BUILT AROUND YOU',
    text: 'Every strategy is built around the client — individual buyers, seasoned investors, and institutions each get an approach shaped to their goals, not a one-size-fits-all package.',
  },
  {
    icon: Award,
    title: 'EXPERTISE YOU CAN TRUST',
    text: 'Two decades of market intelligence back every recommendation we make — grounded in real data and current market conditions, not assumptions.',
  },
  {
    icon: ShieldCheck,
    title: 'WARRANTY AND SUPPORT',
    text: 'Our involvement doesn\'t end at signing. Transparent contracts and a responsive team mean support is there well after the deal closes.',
  },
];

function WhyChooseUs() {
  return (
    <section className="why-choose-us py-5">
      <Container>
        <Row className="align-items-center g-5 mb-5">
          <Col lg={6}>
            <div className="why-image-wrap">
              <img src={whyImage} alt="Why choose Onera Real Estate" className="why-image" loading="lazy" />
              <div className="why-image-badge">
                <span className="why-image-badge-number">20+</span>
                <span className="why-image-badge-label">Years of Excellence</span>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <p className="section-tag">Why Choose Us?</p>
            <h2>BUILDING TRUST THROUGH INTEGRITY</h2>
            <p className="mt-3 text-muted">
              Real estate decisions carry weight, and we treat every one of them that way. For
              two decades, our approach hasn't wavered: understand the client's goals first,
              advise with honesty even when it's not the easy answer, and stay involved until
              the deal is genuinely closed — not just signed.
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <Col md={4} key={f.title}>
                <div className="feature-card text-center">
                  <div className="feature-icon-circle">
                    <Icon size={26} />
                  </div>
                  <h5>{f.title}</h5>
                  <p className="text-muted">{f.text}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}

export default WhyChooseUs;