export interface Launch {
  flight_number: number;
  id: string;
  name: string;
  details: string;
  date_utc: string;
  success: boolean;
  links: {
    article: string;
    patch: {
      small: string;
    };
  };
}
