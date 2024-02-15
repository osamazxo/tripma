import { CardRow } from "@shared/ui/CardRow/CardRow";
import { FC } from "react";
import styles from "./TravelDeals.module.scss";
const TitleComponent: FC<{
  info: string;
  span: string;
  color: string;
}> = ({ info, span, color }) => (
  <>
    {info} <span style={{ color: color }}>{span}</span>
  </>
);
export const TravelDeals = () => {
  return (
    <div className={styles["travel-deals"]}>
      <CardRow
        title={
          <TitleComponent
            info="Find your next adventure with these"
            span="flight deals"
            color="var(--purple-blue)"
          />
        }
        cards={cards1}
      />
      <CardRow
        title={
          <TitleComponent
            info="Find your next adventure with these"
            span="flight deals"
            color="var(--purple-blue)"
          />
        }
        cards={cards2}
      />
    </div>
  );
};

const cards1 = [
  {
    img: "images/14.png",
    title: (
      <TitleComponent
        info="The Bund, "
        span="Shanghai"
        color="var(--purple-blue)"
      />
    ),
    price: 598,
    description: "China’s most international city",
  },
  {
    img: "images/15.png",
    title: (
      <TitleComponent
        info="Interlaken, "
        span="Switzerland"
        color="var(--purple-blue)"
      />
    ),
    price: 981,
    description: "Take a stroll along the famous harbor",
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
  },
];
const cards2 = [
  {
    img: "images/17.png",
    title: (
      <TitleComponent
        info="Seljalandsfoss, "
        span="Iceland"
        color="var(--purple-blue)"
      />
    ),
    price: 619,
    description: "Aerial photography tour of famous waterfalls ",
  },
  {
    img: "images/16.png",
    title: (
      <TitleComponent
        info="Super Tree Grove, "
        span="Singapore"
        color="var(--purple-blue)"
      />
    ),
    price: 1085,
    description: "Towering gardens with colorful canopies",
  },
  {
    img: "images/18.png",
    title: (
      <TitleComponent
        info="Taipei 101, "
        span="Taiwan"
        color="var(--purple-blue)"
      />
    ),
    price: 720,
    description: "Previously the world’s tallest skyscraper",
  },
];
