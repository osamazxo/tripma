import { HotelHero } from "@features/hotels/HotelHero/HotelHero";
import { TravelDeals } from "@features/hotels/TravelDeals/TravelDeals";
import { TravelGuides } from "@features/hotels/TravelGuides/TravelGuides";

export const Hotels = () => {
  return (
    <>
      <HotelHero />
      <TravelDeals />
      <TravelGuides />
    </>
  );
};
