/// <reference types="vite-plugin-svgr/client" />

import { DatePicker, TextField } from "./shared/ui/Input";
import Icon from "./shared/icons/32/arrowLeft.svg?react";
import ToggleSwitch from "./shared/ui/Input/ToggleSwitch/ToggleSwitch";
import CheckBox from "./shared/ui/Input/CheckBox/CheckBox";
import RadioButton from "./shared/ui/Input/RadioButton/RadioButton";
import Pill from "./shared/ui/Input/Pill/Pill";
import { useState } from "react";
import { Header } from "./shared/layout/Header/Header";
function App() {
  const [selectedDates, setSelectedDates] = useState<string[]>([]);
  const [tripType, setTripType] = useState<string>("round-trip");
  console.log(selectedDates);
  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          margin: "auto",
          marginTop: "100px",
          width: "900px",
        }}
      >
        <TextField
          label="Name"
          name="name"
          id="name"
          placeholder="Placeholder"
          startIcon={<Icon />}
          autoComplete="off"
        />
        <ToggleSwitch name="light" id="light" label="light" />
        <CheckBox label="I agree" name="agree" id="agree" variant="mixed" />
        <RadioButton label="Option 1" name="option" id="option1" />
        <RadioButton label="Option 2" name="option" id="option2" />
        <Pill
          label="Select menu"
          options={["option11", "option21", "option31"]}
        />
        <DatePicker
          getSelectedDates={(dates) => setSelectedDates(dates)}
          tripType={tripType}
          selectedDates={selectedDates}
          getTripType={(type) => setTripType(type)}
        />
      </div>
    </>
  );
}

export default App;
