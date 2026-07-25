import { useEffect } from 'react';

function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | Onera Real Estate` : 'Onera Real Estate';
  }, [title]);
}

export default usePageTitle;