import { useEffect } from "react";
import LaunchesDataTable from "./data-table";
import { columns } from "./columns";
import { useLaunchFetch } from "@/hooks/useLaunchesFetch";

const Launches = () => {
  const [state, loading, error, fetchData] = useLaunchFetch();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const data = state.launches || [];

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data</div>;

  return <LaunchesDataTable columns={columns} data={data} />;
};

export default Launches;
