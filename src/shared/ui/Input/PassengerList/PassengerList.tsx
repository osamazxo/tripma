import { FC, useRef, useState } from "react";
import { TextField } from "..";
import { Count } from "../Count/Count";
import useFocusOut from "@hooks/useFocusOut";
import "./PassengerList.scss";
import clsx from "clsx";
interface PassengerListProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: { adults: number; minors: number };
  getValue?: (value: { adults: number; minors: number }) => void;
  error?: boolean;
  helperText?: string;
  required?: boolean;
  disabled?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  placeholder?: string;
  name?: string;
}
export const PassengerList: FC<PassengerListProps> = ({
  value,
  getValue,
  className,
  error,
  helperText,
  required,
  disabled,
  startIcon,
  endIcon,
  placeholder,
  name,
}) => {
  const TextFieldProps = {
    error,
    helperText,
    required,
    disabled,
    startIcon,
    endIcon,
    placeholder,
    name,
  };
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  useFocusOut(menuRef, () => setMenuOpen(false));
  const handleChange = (name: string, newVal: number) => {
    if (value) {
      console.log({ ...value, [name]: newVal });
      getValue && getValue({ ...value, [name]: newVal });
    }
  };
  const valueName = () => {
    const val = [];
    if (value?.adults && value?.adults > 0) {
      val.push(`${value?.adults} adults`);
    }
    if (value?.minors && value.minors > 0) {
      val.push(`${value?.minors} minors`);
    }
    return val.join(" - ");
  };
  return (
    <div className={clsx("passenger-list-container", className)}>
      <TextField
        {...TextFieldProps}
        value={valueName() || "0 adult"}
        readOnly
        onClick={() => setMenuOpen(true)}
      />
      <div ref={menuRef} aria-expanded={menuOpen}>
        <Count
          name="adults"
          value={value?.adults}
          getNewValue={(val) => handleChange("adults", val)}
        />
        <Count
          name="minors"
          value={value?.minors}
          getNewValue={(val) => handleChange("minors", val)}
        />
      </div>
    </div>
  );
};
