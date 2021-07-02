import { useState, useEffect } from 'react';

export default function useFetchData(action) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(true);
  const [data, setData] = useState(null);

  useEffect(async () => {
    if (!isLoaded) {
      try {
        const actionData = await action();
        setData(actionData);
        setIsLoaded(true);
      } catch (err) {
        setError(err);
        setIsLoaded(true);
      }
    }
  }, [isLoaded]);

  const fetchData = () => {
    setIsLoaded(false);
  };

  return [data, isLoaded, error, fetchData];
}