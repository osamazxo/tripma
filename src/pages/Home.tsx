import { FlightDeals } from "@features/flights/FlightDeals/FlightDeals";
import { FlightHero } from "@features/flights/FlightHero/FlightHero";
import { HotelDeals } from "@features/flights/HotelDeals/HotelDeals";
import { Reviews } from "@features/Reviews/Reviews";

export const Home = () => {
  return (
    <>
      <FlightHero />
      <FlightDeals />
      <HotelDeals />
      <Reviews />
    </>
  );
};
