import { useState, useCallback } from "react";
import { API_URL_LAUNCHES } from "../config/apiLaunchConfig";
import { Launch } from "../types/launch";

export const useLaunchFetch = () => {
  const [launches, setLaunches] = useState<Launch[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    setError(false);
    setLoading(true);

    try {
      const endpoint = `${API_URL_LAUNCHES}`;
      const response = await fetch(endpoint);
      const getLaunchesJson = await response.json();
      setLaunches(getLaunchesJson);
    } catch (error) {
      setError(true);
      console.error(error);
    }

    setLoading(false);
  }, []);

  return [launches, loading, error, fetchData] as const;
};
