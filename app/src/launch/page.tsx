import { useEffect } from 'react';
import LaunchInformation from './launch-information';
import { useLaunchpadsDetails } from '@/hooks/useLaunchpadDetail';

const Launch = () => {
  const [launchpads, loading, error, fetchData] = useLaunchpadsDetails();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data</div>;

  return <LaunchInformation data={launchpads} />;
};

export default Launch;
