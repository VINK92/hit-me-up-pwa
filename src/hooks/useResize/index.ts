import { useEffect, useState } from 'react';
import { debounce } from '@mui/material';

const useResize = () => {
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const debouncedResize = debounce(function handleResize() {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    }, 300);

    window.addEventListener('resize', debouncedResize);
    return () => {
      window.removeEventListener('resize', debouncedResize);
    };
  }, []);

  useEffect(() => {
    const handleOrientationChange = () => {
      setHeight(window.innerWidth);
      setWidth(window.innerHeight);
    };

    window.addEventListener('orientationchange', handleOrientationChange);
    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []);

  return { height, width };
};

export default useResize;
