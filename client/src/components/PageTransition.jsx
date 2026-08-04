import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function PageTransition({ children }) {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState('fade-in');

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setTransitionStage('fade-out');
    }
  }, [location, displayLocation]);

  const handleAnimationEnd = () => {
    if (transitionStage === 'fade-out') {
      setDisplayLocation(location);
      setTransitionStage('fade-in');
    }
  };

  return (
    <div className={`page-transition ${transitionStage}`} onAnimationEnd={handleAnimationEnd}>
      {children}
    </div>
  );
}

export default PageTransition;