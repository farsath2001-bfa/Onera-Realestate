import ServicesGrid from '../components/ServicesGrid';
import usePageTitle from '../hooks/usePageTitle';


function Services() {
  usePageTitle('Our Services');
  return <ServicesGrid />;
}

export default Services;