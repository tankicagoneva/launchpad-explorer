import { Launch } from "@/types/launch";


interface LaunchDetailsProps {
  launchDetails: Launch[];
}

/**
 * @module LaunchDetails
 * @description  A component rendering the details of the launches from a launchpad
 * /
 
/**
 * @typedef {Object} LaunchDetails
 * @property {string} name - The name of the launch.
 * @property {string} id - The id of the launch.
 * @property {boolean} success - The success of the launch.
 * @property {boolean} auto_update - The auto update of the launch.
 * @property {number} window- The window of the launch.
 * @property {number} payloads - The payloads of the launch
 */

/**
 * @param {LaunchDetails} launchDetails - the details of the launches from a launchpad
 */

  const LaunchDetails = ({ launchDetails } : LaunchDetailsProps) => {
   return (
            <ul className="text-sm space-y-1.5 pt-0 px-6 pb-6">
              {launchDetails.map((launch) => (
                <li key={launch.id} className="mb-2">
                  <p><strong>{launch.name}</strong></p>
                  <p className="text-muted-foreground">Success: {launch.success  ? "✅" : "❌" }  |   Auto update: {launch.auto_update  ? "✅" : "❌" }  | {launch.window > 0 &&  `Window: ${launch.window} | `}    Payloads: {launch.payloads.length}
                  </p>
                </li>
              ))}
            </ul>
    );
  };
  
  export default LaunchDetails;
