/**
 * @module LaunchCounter
 * @description  A component rendering a counter of the launches from a launchpad
 * 
 * @param {number} launchCount - the number of launches from a launchpad

 */


const LaunchCounter = ({ launchCount } : {launchCount: number}) => {
  return (
    <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="text-2xl font-bold">{launchCount} {launchCount === 1 ? 'Launch' : 'Launches'}</h3>
        {launchCount === 0 && (
          <p className="text-muted-foreground">No launches yet from this launchpad</p>
        )}
        {launchCount > 0 && (
          <p className=" text-muted-foreground">Launches from this site:</p>
        )}
   </div>
  );
};

export default LaunchCounter;