import { useState, useCallback } from 'react';
import { Launchpad } from '../types/launchpad';
import { API_URL_LAUNCHPADS } from '../config/apiLaunchpadConfig';
import { useParams } from 'react-router-dom';

export const useLaunchpadsDetails = () => {
  const [launchpad, setLaunchpad] = useState<Launchpad | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const { id } = useParams();

  const fetchData = useCallback(async () => {
    setError(false);
    setLoading(true);

    try {
      const endpoint = `${API_URL_LAUNCHPADS}/${id}`;      
      const response = await fetch(endpoint);
      const getLaunchJson = await response.json();

      setLaunchpad(getLaunchJson);
      
    } catch (error) {
      setError(true);
      console.error(error);
    }

    setLoading(false);
  }, [id]);

  return [launchpad, loading, error, fetchData] as const;
};
