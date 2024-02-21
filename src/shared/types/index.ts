export type {
  Flight,
  FlightSearchValues,
  Passenger,
  EmergencyInfo,
  BookedFlights,
};

interface Flight {
  id: string;
  logo: string;
  airline: string;
  duration: string;
  time: string;
  stops: {
    name: string;
    duration: string;
  }[];
  price: {
    subtotal: number;
    taxes: number;
    total: number;
  };
  flightType: string;
  flightNumber: string;
}

interface FlightSearchValues {
  from: string;
  to: string;
  flightType: string;
  slectedDates: string[];
  passengerCount: { adults: number; minors: number };
}

interface Passenger {
  firstName: string;
  middleName: string;
  lastName: string;
  suffix: string;
  dob: string;
  email: string;
  phone: string;
  redress: string;
  knownTraveler: string;
  ageGroup?: string;
  bags?: number;
}
interface EmergencyInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}
interface BookedFlights {
  flights?: Flight[];
  from?: string;
  to?: string;
  selectedDates?: string[];
  passengers?: Passenger[];
  emergency?: EmergencyInfo;
  bags?: number[];
}
