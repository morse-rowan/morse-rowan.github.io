import { useEffect } from 'react';
import Portfolio from './Portfolio';

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

const PortfolioGoogle = () => {
  useEffect(() => {
    // Send custom event to Google Analytics when this page loads
    if (window.gtag) {
      window.gtag('event', 'tm_portfolio_view', {
        page_title: 'Team Matching Portfolio',
        page_location: window.location.href,
        page_path: window.location.hash
      });
    }
  }, []);

  return <Portfolio />;
};

export default PortfolioGoogle;
