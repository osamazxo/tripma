import { DatePicker } from "@shared/ui/Input";
import HotelIcon from "@shared/icons/32/hotel.svg?react";
import PersonIcon from "@shared/icons/32/person solid.svg?react";
import styles from "./HotelSearchBar.module.scss";
import Button from "@shared/ui/Button";
import { useFormik } from "formik";
import { SelectList } from "@shared/ui/Input/SelectList/SelectList";
import { PassengerList } from "@shared/ui/Input/PassengerList/PassengerList";
export const HotelSearchBar = () => {
  const formik = useFormik({
    initialValues: {
      location: "",
      stayType: "single",
      slectedDates: [],
      membersCount: { adults: 1, minors: 0 },
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form className={styles.searchbar} onSubmit={formik.handleSubmit}>
      <SelectList
        key={"location"}
        id="location"
        name="location"
        className="location"
        startIcon={<HotelIcon />}
        placeholder={"Where are you staying?"}
        getSelected={(selected) => formik.setFieldValue("location", selected)}
        value={formik.values.location}
        options={locations}
      />
      <div>
        <DatePicker
          type={formik.values.stayType}
          getType={(val) => formik.setFieldValue("stayType", val)}
          selectedDates={formik.values.slectedDates}
          getSelectedDates={(val) => formik.setFieldValue("slectedDates", val)}
          name="stayDate"
          placeholder="Check in - Check out"
          radioNames={["Multiple Nights", "Single Night"]}
        />
        <PassengerList
          className="members-count"
          placeholder="1 adult"
          startIcon={<PersonIcon />}
          id="membersCount"
          value={formik.values.membersCount}
          getValue={(val) => formik.setFieldValue("membersCount", val)}
          name="membersCount"
        />
      </div>
      <Button variant="primary" size="lg" type="submit">
        Search
      </Button>
    </form>
  );
};

const locations = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];
