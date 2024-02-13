import clsx from "clsx";
import { FC } from "react";
import "./Button.scss";
interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  size?: "xs" | "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "tertiary";
  state?: "active" | "disabled" | "error";
  icon?: React.ReactNode;
}
export const Button: FC<ButtonProps> = ({
  size = "md",
  variant = "primary",
  children,
  icon,
  state,
  ...other
}) => {
  return (
    <button
      className={clsx("button", variant, size, state)}
      {...other}
      disabled={state === "disabled"}
    >
      <span>{children}</span>
      {icon && <span className="button-icon">{icon}</span>}
    </button>
  );
};
