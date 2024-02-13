/// <reference types="vite-plugin-svgr/client" />
import clsx from "clsx";
import { FC, MouseEventHandler, useState } from "react";
import "./Pill.scss";
import ChevronDown from "../../../icons/18/chevron down.svg?react";
import ChevronUp from "../../../icons/18/chevron up.svg?react";
import { Popover } from "../Popover/Popover";
import { CheckBox } from "..";
interface PillProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  options?: string[];
  variant?: "rounded" | "square";
  multiSelect?: boolean;
  disabled?: boolean;
  getValue?: (value: string[]) => void;
}
const Pill: FC<PillProps> = ({
  label,
  options,
  variant,
  disabled,
  multiSelect,
  getValue,
  ...other
}) => {
  const [menuOpened, setMenuOpened] = useState<boolean>(false);
  const [selected, setSelected] = useState<string[]>([]);

  getValue?.(selected);

  const handleSignleSelect: MouseEventHandler<HTMLLIElement> = (event) => {
    const target = event.target as HTMLLIElement;
    if (target.getAttribute("aria-disabled") === "true") return;
    const elementValue = target.getAttribute("data-value");
    if (elementValue) {
      setSelected([elementValue]);
      setMenuOpened(false);
    }
  };

  const handleMultiSelect: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const target = event.target as HTMLInputElement;
    const elementValue = target.getAttribute("data-value");
    if (elementValue) {
      if (selected?.includes(elementValue)) {
        setSelected((old) => old.filter((item) => item !== elementValue));
      } else {
        setSelected((old) => [...old, elementValue]);
      }
    }
  };

  return (
    <div
      className={clsx("pill-container", variant, disabled && "disabled")}
      {...other}
    >
      <div
        className="pill-label"
        onClick={() => setMenuOpened((old) => !old)}
        tabIndex={0}
      >
        <span className="label-tex">{label}</span>
        <span className="label-icon">
          {menuOpened ? <ChevronUp /> : <ChevronDown />}
        </span>
      </div>
      <div className={clsx("pill-menu", menuOpened && "opened")}>
        {options?.map(
          (option, index) =>
            (!multiSelect && (
              <Popover
                key={index}
                className="pill-menu-item"
                aria-selected={selected.includes(option)}
                data-value={option}
                onClick={handleSignleSelect}
              >
                {option}
              </Popover>
            )) ||
            (multiSelect && (
              <CheckBox
                key={index}
                label={option}
                data-value={option}
                checked={selected.includes(option)}
                onChange={handleMultiSelect}
              />
            ))
        )}
      </div>
    </div>
  );
};

export default Pill;
