import { FC, useState } from "react";
import Logo from "../../logos/tripma/tripma-lp.svg?react";
import MenuIcon from "@shared/icons/32/menu.svg?react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { Button } from "@shared/ui/Button";
import { getAuth } from "@util/auth";
import { Modal } from "@shared/ui/Modal/Modal";
import { SignUp } from "@features/auth/Signup/SignUp";
import clsx from "clsx";
interface HeaderProps {
  className?: string;
  variant?: "full" | "basic";
}
export const Header: FC<HeaderProps> = ({ className, variant }) => {
  const token = getAuth;
  const [showAuthDialog, setShowAuthDialog] = useState(false);
  return (
    <header className={clsx(styles.header, className, styles[variant || ""])}>
      <div>
        <MenuIcon className={styles["menu-icon"]} />
        <Link to="/" className={styles.logo}>
          <Logo />
        </Link>
      </div>
      <ul className={styles.nav}>
        <li>
          <Link to="/flights">Flights</Link>
        </li>
        <li>
          <Link to="/hotels">Hotels</Link>
        </li>
        <li>
          <Link to="/packages">Packages</Link>
        </li>
        {!token && (
          <>
            <li>
              <Link to="" onClick={() => setShowAuthDialog(true)}>
                Sign in
              </Link>
            </li>
            <Button size="sm" onClick={() => setShowAuthDialog(true)}>
              Sign up
            </Button>
          </>
        )}
        {token && (
          <>
            <li className={styles["my-trips"]}>
              <Link to="/my-trips">My trips</Link>
            </li>
            <li className={styles.avatar}>
              <img src="images/avatar.png" alt="" loading="lazy" />
            </li>
          </>
        )}
      </ul>
      <Modal opened={showAuthDialog} setOpened={setShowAuthDialog}>
        <SignUp setOpen={setShowAuthDialog} />
      </Modal>
    </header>
  );
};
