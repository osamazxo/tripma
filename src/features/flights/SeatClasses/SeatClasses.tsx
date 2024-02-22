import { FC } from "react";
import ArrowRight from "@shared/icons/32/arrowRight.svg?react";
import clsx from "clsx";
import styles from "./SeatClasses.module.scss";
import { ClassInfo } from "./ClassInfo";
interface SeatClassesProps {
  from?: string;
  to?: string;
  selectedDates?: string[];
  className?: string;
  children?: React.ReactNode;
}
export const SeatClasses: FC<SeatClassesProps> = ({ className, children }) => {
  return (
    <div className={clsx(styles["seat-classes"], className)}>
      <div className={styles["header"]}>
        <div>
          <div className={styles["code"]}>SFO</div>
          <div>
            <ArrowRight />
          </div>
          <div className={styles["code"]}>NRT</div>
        </div>
        <div className={styles["progress-step"]}>
          <p>
            Feb 25 <span>|</span> 7:00AM
          </p>
          <p>Departing</p>
        </div>
        <div className={styles["progress-step"]} aria-selected="true">
          <p>
            Mar 21 <span>|</span> 12:15PM
          </p>
          <p>Arriving</p>
        </div>
      </div>
      <div className={styles["classes-comparison"]}>
        <ClassInfo
          img="/images/Economy-Seats.png"
          title="Economy"
          pros={economyPros}
          description="Rest and recharge during your flight with extended leg room, personalized service, and a multi-course meal service"
        />
        <ClassInfo
          img="/images/Business-Seats.png"
          title="Business"
          pros={businessPros}
          description="Rest and recharge during your flight with extended leg room, personalized service, and a multi-course meal service"
        />
      </div>
      <div className={styles["footer"]}>{children}</div>
    </div>
  );
};
const economyPros = [
  "Built-in entertainment system",
  "Complimentary snacks and drinks",
  "One free carry-on and personal item",
];

const businessPros = [
  "Extended leg room",
  "First two checked bags free",
  "Priority boarding",
  "Personalized service",
  "Enhanced food and drink service",
  "Seats that recline 40% more than economy",
];
