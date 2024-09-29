import { useEffect } from "react";
import LaunchpadsDataTable from "./data-table";
import { columns } from "./columns";
import { useLaunchpadsFetch } from "../hooks/useLaunchpadsFetch";


const Launchpads = () => {
  const [launchpads, loading, error, fetchData] = useLaunchpadsFetch();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data</div>;

  return (
    <div>
      <LaunchpadsDataTable columns={columns} data={launchpads} />

    </div>
  );

};

export default Launchpads;
