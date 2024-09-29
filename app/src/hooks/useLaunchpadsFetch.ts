import { useState, useCallback } from "react";
import { Launchpad } from "../types/launchpad";
import { API_URL_LAUNCHPADS } from "../config/apiLaunchpadConfig";
import { checkForChanges } from "@/utils/launchpadUtils";

export const useLaunchpadsFetch = () => {
  const [launchpad, setLaunchpad] = useState<Launchpad[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);


  const fetchData = useCallback(async () => {
    setError(false);
    setLoading(true);

    try {
      const endpoint = `${API_URL_LAUNCHPADS}`;
      const response = await fetch(endpoint);
      const getLaunchesJson = await response.json();
      setLaunchpad(getLaunchesJson);
      checkForChanges(getLaunchesJson);

    } catch (error) {
      setError(true);
      console.error(error);
    }

    setLoading(false);
  }, []);

  return [launchpad, loading, error, fetchData] as const;


  };
