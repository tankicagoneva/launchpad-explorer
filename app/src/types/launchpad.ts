export interface Launchpad {
  flight_number: number;
  id: string;
  name: string;
  full_name: string;
  locality: string;
  region: string;
  launch_successes: number;
  launch_attempts: number;
  status: string;
  details: string;
  rockets: [];
  timezone: string;
  launches: [];
  images: {
    large: string;
  };
}
