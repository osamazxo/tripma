import { FlightDeals } from "@features/FlightDeals/FlightDeals";
import { FlightHero } from "@features/FlightHero/FlightHero";
import { HotelDeals } from "@features/HotelDeals/HotelDeals";
import { Reviews } from "@features/Reviews/Reviews";

export const Home = () => {
  return (
    <div>
      <FlightHero />
      <FlightDeals />
      <HotelDeals />
      <Reviews />
    </div>
  );
};
