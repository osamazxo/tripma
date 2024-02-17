import clsx from "clsx";
import { FC } from "react";
import "./Pill.scss";
import ChevronDown from "@shared/icons/18/chevron down.svg?react";
import ChevronUp from "@shared/icons/18/chevron up.svg?react";
interface PillProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "rounded" | "square";
  opened?: boolean;
  disabled?: boolean;
}
const Pill: FC<PillProps> = ({
  variant,
  opened,
  disabled,
  children,
  ...other
}) => {
  return (
    <div
      className={clsx("pill-chit", variant)}
      aria-disabled={disabled}
      tabIndex={0}
      {...other}
    >
      <span className="text">{children}</span>
      <span className="icon">{opened ? <ChevronUp /> : <ChevronDown />}</span>
    </div>
  );
};

export default Pill;
