import { CheckBox, TextField } from "@shared/ui/Input";
import styles from "./SignUp.module.scss";
import Button from "@shared/ui/Button";
import GoogleIcon from "@shared/icons/18/google.svg?react";
import FacebookIcon from "@shared/icons/18/facebook.svg?react";
import CloseIcon from "@shared/icons/32/x close no.svg?react";
import { FC, HTMLAttributes } from "react";
interface SignUpProps extends HTMLAttributes<HTMLDivElement> {
  setOpen: (open: boolean) => void;
}
export const SignUp: FC<SignUpProps> = ({ setOpen }) => {
  return (
    <div className={styles["signup"]}>
      <div>
        <h3>Sign up for Tripma</h3>
        <CloseIcon className={styles["close"]} onClick={() => setOpen(false)} />
      </div>
      <p>
        Tripma is totally free to use. Sign up using your email address or phone
        number below to get started.
      </p>
      <TextField type="email" placeholder="Email or phone number" />
      <TextField label="Password" type="password" placeholder="Password" />
      <CheckBox label="I agree to the terms and conditions" />
      <CheckBox label="Send me the latest deal alerts" />
      <Button>Create account</Button>
      <span className={styles["or"]}>or</span>
      <Button
        variant="secondary"
        leftIcon={<GoogleIcon />}
        className="google-btn"
      >
        Continue with Google
      </Button>
      <Button
        variant="secondary"
        leftIcon={<FacebookIcon />}
        className="fb-btn"
      >
        Continue with Facebook
      </Button>
    </div>
  );
};
