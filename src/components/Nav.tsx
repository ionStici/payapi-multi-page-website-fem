import styles from "./../styles/Nav.module.scss";
import React from "react";
import logo from "./../assets/shared/desktop/logo.svg";
import menu from "./../assets/shared/mobile/menu.svg";
import close from "./../assets/shared/mobile/close.svg";

const Nav = function () {
  const [navStatus, setNavStatus] = React.useState(false);

  const toggleNav = ({ target }) => {
    const icon = target.querySelector("img");

    if (!navStatus) {
      // Open Nav

      icon.src = close;

      setNavStatus(true);
      return;
    }

    if (navStatus) {
      // Close Nav

      icon.src = menu;

      setNavStatus(false);
      return;
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.inner_container}>
          <a className={styles.btn_logo} href=".">
            <img src={logo} alt="" />
          </a>

          <button className={styles.btn_toggle_nav} onClick={toggleNav}>
            <img src={menu} alt="" />
          </button>

          <div className={styles.nav_container}>
            <div className={styles.nav_container_inner}>
              <nav className={styles.nav}>
                <ul>
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
              </nav>

              <button className={styles.btn_cta}>Schedule a Demo</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
