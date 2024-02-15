import { CardRow } from "@shared/ui/CardRow/CardRow";
import styles from "./TravelGuides.module.scss";

export const TravelGuides = () => {
  return (
    <div className={styles["travel-guides"]}>
      <CardRow
        title={
          <>
            Explore travel guides <br />
            <span>Explore travel guides</span>
          </>
        }
        cards={cards}
      />
    </div>
  );
};
const cards = [
  {
    img: "images/14.png",
    title: "The Bund, Shanghai",
    description: "China’s most international city",
  },
  {
    img: "images/15.png",
    title: "Interlaken, Switzerland",
    description: "Take a stroll along the famous harbor",
  },
  {
    img: "images/5.png",
    title: "Kōdaiji Temple, Kyoto",
    description: "Step back in time in the Gion district",
  },
];
