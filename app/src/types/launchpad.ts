export interface Launchpad {
  flight_number: number;
  id: string;
  name: string;
  region: string;
  launch_successes: number;
  launch_attempts: number;
  status: string;
  details: string;
  launches: [];
  images: {
     large: string;
  };
}
