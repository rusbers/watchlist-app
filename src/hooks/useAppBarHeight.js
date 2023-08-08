import { useState, useEffect } from 'react';

function useAppBarHeight() {
  const [appBarHeight, setAppBarHeight] = useState({
    headerHeight: `0px`,
    footerHeight: `0px`,
    totalHeight: `0px`,
  });

  const headerSelector = 'nav.MuiAppBar-root';
  const footerSelector = 'footer.MuiAppBar-root';

  const handleResize = (headerSelector, footerSelector) => {
    const headerValue = headerSelector?.clientHeight || 0;
    const footerValue = footerSelector?.clientHeight || 0;
    const totalValue = headerValue + footerValue;

    setAppBarHeight({
      headerHeight: `${headerValue}px`,
      footerHeight: `${footerValue}px`,
      totalHeight: `${totalValue}px`,
    });
  };

  useEffect(() => {
    const headerAppBar = document.querySelector(headerSelector);
    const footerAppBar = document.querySelector(footerSelector);

    handleResize(headerAppBar, footerAppBar);

    window.addEventListener('resize', () => handleResize(headerAppBar, footerAppBar));

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return appBarHeight;
}

export default useAppBarHeight;
