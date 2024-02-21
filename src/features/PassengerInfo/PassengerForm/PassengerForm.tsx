import { TextField } from "@shared/ui/Input";
import styles from "./PassengerForm.module.scss";
import { FC } from "react";
import { useFormik } from "formik";
import { Passenger } from "@shared/types";
interface PassengerFormProps {
  passengerNo: number;
  ageGroup: "Adult" | "Minor";
  getValues: (values: Passenger) => void;
}
export const PassengerForm: FC<PassengerFormProps> = ({
  passengerNo,
  ageGroup,
  getValues,
}) => {
  console.log("PassengerForm");
  const formik = useFormik({
    initialValues: {
      firstName: "",
      middleName: "",
      lastName: "",
      suffix: "",
      dob: "",
      email: "",
      phone: "",
      redress: "",
      knownTraveler: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  getValues(formik.values);
  return (
    <form className="passenger-form">
      <h4 className={styles["passenger-title"]}>
        Passenger {passengerNo} ({ageGroup})
      </h4>
      <div className={styles["first"]}>
        <TextField
          placeholder="First Name"
          required
          id={"firstName" + passengerNo}
          name="firstName"
          onChange={formik.handleChange}
          autoComplete="on"
        />
        <TextField
          placeholder="Middle"
          id={"middleName" + passengerNo}
          name="middleName"
          onChange={formik.handleChange}
          autoComplete="on"
        />
        <TextField
          placeholder="Last Name"
          required
          id={"lastName" + passengerNo}
          name="lastName"
          onChange={formik.handleChange}
          autoComplete="on"
        />
        <TextField
          placeholder="suffix"
          id={"suffix" + passengerNo}
          name="suffix"
          onChange={formik.handleChange}
          autoComplete="on"
        />
        <TextField
          placeholder="Date of Birth"
          required
          helperText="MM/DD/YY"
          id={"dob" + passengerNo}
          name="dob"
          onChange={formik.handleChange}
          autoComplete="on"
        />
      </div>
      <div className={styles["second"]}>
        <TextField
          placeholder="Email address"
          required
          id={"email" + passengerNo}
          name="email"
          onChange={formik.handleChange}
          autoComplete="on"
        />
        <TextField
          placeholder="Phone number"
          required
          id={"phone" + passengerNo}
          name="phone"
          onChange={formik.handleChange}
          autoComplete="on"
        />
        <TextField
          placeholder="Redress number"
          id={"redress" + passengerNo}
          name="redress"
          onChange={formik.handleChange}
          autoComplete="on"
        />
        <TextField
          placeholder="Known traveler number"
          required
          id={"knownTraveler" + passengerNo}
          name="knownTraveler"
          onChange={formik.handleChange}
          autoComplete="on"
        />
      </div>
    </form>
  );
};
