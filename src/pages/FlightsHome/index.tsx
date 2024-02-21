import { FlightHero } from "@features/flights/FlightHero/FlightHero";
import { Reviews } from "@features/Reviews/Reviews";
import { flightDeals1, hotelDeals1, topFlightDeal } from "@shared/data";
import { Card } from "@shared/ui/Card/Card";
import { CardRow } from "@shared/ui/CardRow/CardRow";
import { RowTitle } from "@shared/ui/RowTitle/RowTitle";

export const FlightsHome = () => {
  return (
    <>
      <FlightHero />
      <div className="page-container">
        <CardRow
          title={
            <RowTitle
              info="Find your next adventure with these"
              span="flight deals"
              color="var(--purple-blue)"
            />
          }
          cards={flightDeals1}
          viewAllUrl="/flights"
        />
        <Card {...topFlightDeal} />
        <CardRow
          title={
            <RowTitle
              info="Explore unique"
              span="places to stay"
              color="var(--turquoise)"
            />
          }
          viewAllUrl="/hotels"
          viewAllBottomButton="Explore more stays"
          cards={hotelDeals1}
        />
        <Reviews />
      </div>
    </>
  );
};
