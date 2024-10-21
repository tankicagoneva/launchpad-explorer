export interface Launch {
  flight_number: number;
  id: string;
  name: string;
  full_name: string;
  details: string;
  date_utc: string;
  success: boolean;
  window: number;
  auto_update: boolean;
  payloads: [];
  links: {
    article: string;
    patch: {
      small: string;
    };
  };
}
