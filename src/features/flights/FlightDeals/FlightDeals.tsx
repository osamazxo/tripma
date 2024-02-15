import { Card } from "@shared/ui/Card/Card";
import styles from "./FlightDeals.module.scss";
import { FC } from "react";
import { CardRow } from "@shared/ui/CardRow/CardRow";
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
    img: "images/19.png",
    title: (
      <TitleComponent
        info="The Bund, "
        span="Shanghai"
        color="var(--purple-blue)"
      />
    ),
    price: 598,
    description: "China’s most international city",
    saturation: true,
  },
  {
    img: "images/20.png",
    title: (
      <TitleComponent
        info="Sydney Opera House, "
        span="Sydney"
        color="var(--purple-blue)"
      />
    ),
    price: 981,
    description: "Take a stroll along the famous harbor",
    saturation: true,
  },
  {
    img: "images/5.png",
    title: (
      <TitleComponent
        info="Kōdaiji Temple, "
        span="Kyoto"
        color="var(--purple-blue)"
      />
    ),
    price: 633,
    description: "Step back in time in the Gion district",
    saturation: true,
  },
];
export const FlightDeals = () => {
  return (
    <div className={styles["flight-deals"]}>
      <CardRow
        title={
          <TitleComponent
            info="Find your next adventure with these"
            span="flight deals"
            color="var(--purple-blue)"
          />
        }
        cards={cards}
        viewAllUrl="/flights"
      />
      <Card
        img="images/3.png"
        title={
          <>
            Tsavo East National Park, <span>Kenya</span>
          </>
        }
        price={1248}
        description="Named after the Tsavo River, and opened in April 1984, Tsavo East National Park is one of the oldest parks in Kenya. It is located in the semi-arid Taru Desert."
      />
    </div>
  );
};
