import { toast } from 'react-toastify';

export const useWatchedLaunchpads = () => {
  const handleWatch = (id: string, launchpad: { name: string; status: string; details: string; launches: []; }) => {
    const watchedLaunchpads = JSON.parse(localStorage.getItem("watchedLaunchpads") || "[]");
    
    if (!watchedLaunchpads.includes(id)) {
      watchedLaunchpads.push(id);
      localStorage.setItem("watchedLaunchpads", JSON.stringify(watchedLaunchpads));
      
      const lastKnownState = JSON.parse(localStorage.getItem("lastKnownLaunchpadState") || "{}");
      lastKnownState[id] = {
        name: launchpad.name,
        status: launchpad.status,
        details: launchpad.details,
        launches: launchpad.launches,
      };
      localStorage.setItem("lastKnownLaunchpadState", JSON.stringify(lastKnownState));
      
      toast.success(`Now watching launchpad ${launchpad.name}`, {
        position: "top-center"
      });
    } else {
      toast.info(`Launchpad ${launchpad.name} is already being watched`, {
        position: "top-center"
      });
    }
  }


  return { handleWatch };
};