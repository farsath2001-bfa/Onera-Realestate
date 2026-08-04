import { useState, useEffect, useRef } from 'react';

function useFadeIn(threshold = 0.15) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasTriggered = useRef(false);

  useEffect(() => {
    if (hasTriggered.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          hasTriggered.current = true;
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
}

export default useFadeIn;