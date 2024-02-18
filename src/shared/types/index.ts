export type { Flight, FlightSearchValues };

interface Flight {
  id?: string;
  logo?: string;
  airline?: string;
  duration?: string;
  time?: string;
  stops?: {
    name: string;
    duration: string;
  }[];
  price?: {
    subtotal: number;
    taxes: number;
    total: number;
  };
  tripType?: string;
  tripNumber?: string;
}

interface FlightSearchValues {
  fromDestination?: string;
  toDestination?: string;
  tripType?: string;
  slectedDates?: string[];
  passengerCount?: { adults: number; minors: number };
}
