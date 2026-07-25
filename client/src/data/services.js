import landImg from '../assets/images/services/land-sales-marketing.jpg';
import propertyImg from '../assets/images/services/property-hotel-sales.jpg';
import investmentImg from '../assets/images/services/real-estate-investment.jpg';
import feasibilityImg from '../assets/images/services/feasibility-engineering-studies.jpg';
import managementImg from '../assets/images/services/property-management.jpg';

const services = [
  {
    slug: 'land-sales-marketing',
    name: 'Land Sales & Marketing',
    summary: 'Connecting landowners with serious buyers and development partners.',
    details: 'We help landowners reach genuinely interested buyers and investors — handling feasibility checks, permit coordination, confidential outreach, and modern presentation tools to move land toward a real, viable sale or partnership.',
    image: landImg,
    features: [
      'Confidential, targeted buyer outreach',
      'Feasibility checks and permit coordination',
      'Virtual presentation and marketing tools',
      'Direct access to qualified investors',
    ],
  },
  {
    slug: 'property-hotel-sales',
    name: 'Property & Hotel Sales',
    summary: 'A clear path to sale for buildings, distressed assets, and hospitality properties.',
    details: 'Whether it\'s a building needing a fast, well-managed exit or a hotel and hospitality asset requiring sector-specific expertise, we design a sale strategy — direct sale, debt resolution support, or specialized hospitality guidance — built around the best outcome.',
    image: propertyImg,
    features: [
      'Structured exit strategies for distressed assets',
      'Mortgage and debt resolution support',
      'Hospitality-sector market expertise',
      'End-to-end sale management',
    ],
  },
  {
    slug: 'real-estate-investment',
    name: 'Real Estate Investment',
    summary: 'Investment opportunities, developer partnerships, and structured contracts.',
    details: 'From identifying investment opportunities that protect and grow capital, to connecting developers with premium land, to drafting balanced investor-landowner partnership agreements — we support every side of a real estate investment.',
    image: investmentImg,
    features: [
      'Capital-protective investment opportunities',
      'Developer and investor matchmaking',
      'Balanced partnership contract drafting',
      'Ongoing portfolio guidance',
    ],
  },
  {
    slug: 'feasibility-engineering-studies',
    name: 'Feasibility & Engineering Studies',
    summary: 'Real numbers before you commit — layout, cost, and viability analysis.',
    details: 'Before any major land, hotel, or building investment, our studies map out layout options, land use scenarios, construction cost estimates, and overall feasibility — so decisions are based on data, not guesswork.',
    image: feasibilityImg,
    features: [
      'Layout and land use analysis',
      'Detailed construction cost estimates',
      'Risk and return feasibility assessment',
      'Data-backed investment decisions',
    ],
  },
  {
    slug: 'property-management',
    name: 'Property Management',
    summary: 'Hands-off ownership, without losing oversight.',
    details: 'From rent collection to maintenance coordination and contract handling, we manage the day-to-day of leased properties so owners can stay informed without staying involved in every detail.',
    image: managementImg,
    features: [
      'Rent collection and financial reporting',
      'Maintenance coordination',
      'Lease contract administration',
      'Regular owner updates',
    ],
  },
];

export default services;