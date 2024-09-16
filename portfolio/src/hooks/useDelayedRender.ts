import { useEffect, useState } from 'react';

export function useDelayedRender(delay: number) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer); // Cleanup the timer
  }, [delay]);

  return isLoading;
}
