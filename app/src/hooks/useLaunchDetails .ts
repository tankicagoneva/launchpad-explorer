import { API_URL_LAUNCHES } from '@/config/apiLaunchConfig';
import { Launch } from '@/types/launch';
import { useState, useEffect } from 'react';

export const useLaunchDetails = (launchIds: string[]) => {
  const [launchDetails, setLaunchDetails] = useState<Launch[]>([]);

  useEffect(() => {
    const fetchLaunchDetails = async () => {
      if (launchIds.length > 0) {
        try {
          const response = await fetch(`${API_URL_LAUNCHES}`);
          const allLaunches = await response.json();
          const filteredLaunches = allLaunches.filter((launch: Launch) => 
            launchIds.includes(launch.id)
          );
          setLaunchDetails(filteredLaunches);
        } catch (error) {
          console.error('Error fetching launch details:', error);
        }
      }
    };

    fetchLaunchDetails();
  }, [launchIds]);

  return { launchDetails };

};