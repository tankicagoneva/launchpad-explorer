import { useState, useCallback } from "react";
import { API_URL_LAUNCHES } from "../config";
import { LaunchFetchState } from "../types/launch";

export const useLaunchFetch = () => {
  const [state, setState] = useState<LaunchFetchState>({ launches: [] });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    setError(false);
    setLoading(true);

    try {
      const endpoint = `${API_URL_LAUNCHES}`;
      const result = await (await fetch(endpoint)).json();
      console.log(result);
      setState({ launches: result });
    } catch (error) {
      setError(true);
    }

    setLoading(false);
  }, []);

  return [state, loading, error, fetchData] as const;
};
