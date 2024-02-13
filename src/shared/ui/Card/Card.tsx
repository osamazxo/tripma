import { FC, HTMLAttributes } from "react";
import styles from "./Card.module.scss";
import clsx from "clsx";
interface CardProps extends HTMLAttributes<HTMLDivElement> {
  img: string;
  title: any;
  description: string;
  price?: number;
  saturation?: boolean;
  spanColor?: string;
}
export const Card: FC<CardProps> = ({
  img,
  title,
  description,
  className,
  price,
  saturation,
  ...other
}) => {
  return (
    <div className={clsx(styles.card, className)} {...other}>
      <img
        src={img}
        alt=""
        loading="lazy"
        style={{ filter: saturation ? "saturate(1.7)" : "none" }}
      />
      <div className={styles["text"]}>
        <div className={styles["header-text"]}>
          <h4 className={styles["title"]}>{title}</h4>
          {price && <h4 className={styles["price"]}>${price}</h4>}
        </div>
        <p className={styles["description"]}>{description}</p>
      </div>
    </div>
  );
};
