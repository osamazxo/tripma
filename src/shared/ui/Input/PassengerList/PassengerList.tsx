import { FC, useRef, useState } from "react";
import { TextField } from "..";
import { ListItem } from "./ListItem";
import useFocusOut from "@hooks/useFocusOut";
import "./PassengerList.scss";
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
  return (
    <div className="passenger-list-container">
      <TextField
        {...TextFieldProps}
        readOnly
        onClick={() => setMenuOpen(true)}
      />
      <ul ref={menuRef} aria-expanded={menuOpen}>
        <ListItem
          name="adults"
          value={value?.adults}
          getNewValue={(val) => handleChange("adults", val)}
        />
        <ListItem
          name="minors"
          value={value?.minors}
          getNewValue={(val) => handleChange("minors", val)}
        />
      </ul>
    </div>
  );
};
