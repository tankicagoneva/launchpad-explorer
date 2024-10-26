import { API_URL_LAUNCHES } from '@/config/apiLaunchConfig';
import { Launch } from '@/types/launch';

import { useState, useEffect } from 'react';


/**
 * @function useLaunchDetails
 * @description  Custom hook to fetch and manage launch details based on provided launch IDs.
 * 
 * @param {string[]} launchIds - Array of launch IDs to fetch details for
 * 
 * 
 * @returns {Object} Hook return object
 * @returns {Launch[]} launchDetails Array of launch objects containing details for the requested launches
 * 
 * 
 *  @remarks
 * - The hook makes API calls only when launchIds array is not empty
 * - If the API call fails, an error will be logged to the console
 * - Empty launchIds array will result in empty launchDetails array
 * 
 * @effect
 * - Triggers when launchIds array changes
 * - Fetches launch data from API_URL_LAUNCHES
 * - Filters launches to match provided IDs
 * - Updates launchDetails state with filtered results
 */

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

}