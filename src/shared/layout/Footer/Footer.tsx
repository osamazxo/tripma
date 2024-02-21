import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";
import Logo from "@shared/logos/tripma/tripma-lp.svg?react";
import TwitterIcon from "@shared/icons/24/twitter.svg?react";
import InstgramIcon from "@shared/icons/24/instagram.svg?react";
import FacebookIcon from "@shared/icons/24/facebook.svg?react";

const aboutList = [
  { title: "About Tripma", link: "/" },
  { title: "How it works", link: "/" },
  { title: "Careers", link: "/" },
  { title: "Press", link: "/" },
  { title: "Blog", link: "/" },
  { title: "Forum", link: "/" },
];
const partnerList = [
  { title: "Partnership programs", link: "/" },
  { title: "Affiliate program", link: "/" },
  { title: "Connectivity partners", link: "/" },
  { title: "Promotions and events", link: "/" },
  { title: "Integrations", link: "/" },
  { title: "Community", link: "/" },
  { title: "Loyalty program", link: "/" },
];
const supportList = [
  { title: "Help Center", link: "/" },
  { title: "Contact us", link: "/" },
  { title: "Privacy policy", link: "/" },
  { title: "Terms of service", link: "/" },
  { title: "Trust and safety", link: "/" },
  { title: "Accessibility", link: "/" },
];
const appList = [
  { title: "Tripma for Android", link: "/" },
  { title: "Tripma for iOS", link: "/" },
  { title: "Mobile site", link: "/" },
];
export const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["top-container"]}>
        {" "}
        <div className={styles["logo"]}>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className={styles["about"]}>
          <p className={styles["title"]}>About</p>
          {aboutList.map((item, index) => {
            return (
              <div className={styles["link"]} key={"about" + index}>
                <Link to={item.link}>{item.title}</Link>
              </div>
            );
          })}
        </div>
        <div className={styles["partner"]}>
          <p className={styles["title"]}>Partner with us</p>
          {partnerList.map((item, index) => {
            return (
              <div className={styles["link"]} key={"partner" + index}>
                <Link to={item.link}>{item.title}</Link>
              </div>
            );
          })}
        </div>
        <div className={styles["support"]}>
          <p className={styles["title"]}>Support</p>
          {supportList.map((item, index) => {
            return (
              <div className={styles["link"]} key={"support" + index}>
                <Link to={item.link}>{item.title}</Link>
              </div>
            );
          })}
        </div>
        <div className={styles["app"]}>
          <p className={styles["title"]}>Get the app</p>
          {appList.map((item, index) => {
            return (
              <div className={styles["link"]} key={"app" + index}>
                <Link key={"app" + index} to={item.link}>
                  {item.title}
                </Link>
              </div>
            );
          })}
          <div className={styles["download"]}>
            <a href="https://www.apple.com/eg/app-store/" target="_blank">
              <img src="/images/app-store.png" alt="app store" loading="lazy" />
            </a>
            <a href="https://play.google.com/store" target="_blank">
              <img
                src="/images/google-play.png"
                alt="google play"
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </div>
      <div className={styles["bottom-container"]}>
        <div className={styles["social"]}>
          <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
            <TwitterIcon />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <InstgramIcon />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <FacebookIcon />
          </a>
        </div>
        <p className={styles["copyright"]}>
          © {new Date().getFullYear()} Tripma incorporated
        </p>
      </div>
    </footer>
  );
};
