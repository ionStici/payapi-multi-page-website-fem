import styles from "./../styles/Nav.module.scss";
import React from "react";
import logo from "./../assets/shared/desktop/logo.svg";
import menu from "./../assets/shared/mobile/menu.svg";
import close from "./../assets/shared/mobile/close.svg";

const Nav = function () {
  const [navStatus, setNavStatus] = React.useState(false);

  const toggleNav = (e) => {
    console.log(e);
  };

  return (
    <nav className={styles.nav}>
      <a className={styles.logo_link} href=".">
        <img src={logo} alt="" />
      </a>

      <button className={styles.btn_toggle_nav} onClick={toggleNav}>
        <img src={close} alt="" />
      </button>

      <div className={styles.box}>
        <ul className={styles.ul}>
          <li>
            <a href=".">Pricing</a>
          </li>
          <li>
            <a href=".">About</a>
          </li>
          <li>
            <a href=".">Contact</a>
          </li>
        </ul>

        <button>Schedule a Demo</button>
      </div>
    </nav>
  );
};

export default Nav;
