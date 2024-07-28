import { Launchpad } from "../types/launchpad";
import { toast } from 'react-toastify';


export function checkForChanges (launchpads: Launchpad[]): Set<string> {

    const watchedLaunchpadIds = JSON.parse(localStorage.getItem("watchedLaunchpads") || "[]");
    const lastKnownState = JSON.parse(localStorage.getItem("lastKnownLaunchpadState") || "{}");
    const changedLaunchpadIds = new Set<string>();
  
    watchedLaunchpadIds.forEach((id: string) => {


      const currentLaunchpad = launchpads.find(lp => lp.id === id);
      const lastKnownLaunchpad = lastKnownState[id];
  
      if (currentLaunchpad && lastKnownLaunchpad) {
        let hasChanged = false;

        if (currentLaunchpad.status !== lastKnownLaunchpad.status) {
          toast.info(`Launchpad ${currentLaunchpad.name} status changed from ${lastKnownLaunchpad.status} to ${currentLaunchpad.status}`);
          hasChanged = true;
        }

        if (currentLaunchpad.details !== lastKnownLaunchpad.details) {
          toast.info(`Launchpad ${currentLaunchpad.name } details have been updated`);
          hasChanged = true;
        }
        if (currentLaunchpad.launches.length !== lastKnownLaunchpad.launches.length) {
          toast.info(`New launches added for ${currentLaunchpad.name}`);
          hasChanged = true;
        }


        if (hasChanged) {
          changedLaunchpadIds.add(id);
        }
      } 
    }
    );


    const newLastKnownState: Record<string, unknown> = {};
    watchedLaunchpadIds.forEach((id: string) => {
      const launchpad = launchpads.find(lp => lp.id === id);
      if (launchpad) {
        newLastKnownState[id] = {
          name: launchpad.name,
          status: launchpad.status,
          details: launchpad.details,
          launches: launchpad.launches,};
      }
    });
    localStorage.setItem("lastKnownLaunchpadState", JSON.stringify(newLastKnownState));

    return  changedLaunchpadIds;
  }