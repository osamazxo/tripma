import { FC } from "react";
import { CardRow } from "@shared/ui/CardRow/CardRow";
import styles from "./HotelDeals.module.scss";
const TitleComponent: FC<{
  info: string;
  span: string;
  color: string;
}> = ({ info, span, color }) => (
  <>
    {info} <span style={{ color: color }}>{span}</span>
  </>
);
const cards = [
  {
    img: "/images/22.png",
    title: (
      <TitleComponent
        info="Discover the"
        span="Money Isles"
        color="var(--turquoise)"
      />
    ),
    description:
      "From the 2nd century AD, the islands were known as the 'Money Isles' due to the abundance of cowry shells, a currency of the early ages.",
  },
  {
    img: "/images/21.png",
    title: (
      <TitleComponent
        info="Experience the Ourika Valley in"
        span="Morocco"
        color="var(--turquoise)"
      />
    ),
    description:
      "Morocco’s Hispano-Moorish architecture blends influences from Berber culture, Spain, and contemporary artistic currents in the Middle East.",
  },
  {
    img: "/images/23.png",
    title: (
      <TitleComponent
        info="Live traditionally in"
        span="Mongolia"
        color="var(--turquoise)"
      />
    ),
    description:
      "Traditional Mongolian yurts consists of an angled latticework of wood or bamboo for walls, ribs, and a wheel.",
  },
];
export const HotelDeals = () => {
  return (
    <div className={styles["hotel-deals"]}>
      <CardRow
        title={
          <TitleComponent
            info="Explore unique"
            span="places to stay"
            color="var(--turquoise)"
          />
        }
        viewAllUrl="/hotels"
        viewAllBottomButton="Explore more stays"
        cards={cards}
      />
    </div>
  );
};
