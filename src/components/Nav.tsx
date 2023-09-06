import styles from "./../styles/Nav.module.scss";
import React from "react";
import logo from "./../assets/shared/desktop/logo.svg";
import menu from "./../assets/shared/mobile/menu.svg";
import close from "./../assets/shared/mobile/close.svg";

const Nav = function () {
  const [navStatus, setNavStatus] = React.useState(false);
  const navContainer = React.useRef(null);

  const toggleNav = ({ target }) => {
    const icon = target.querySelector("img");
    const nav = navContainer.current;

    if (!navStatus) {
      // Open Nav
      icon.src = close;
      nav.classList.add(styles.open);
      setNavStatus(true);
      return;
    }

    if (navStatus) {
      // Close Nav
      icon.src = menu;
      nav.classList.remove(styles.open);
      setNavStatus(false);
      return;
    }
  };

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.wrapper}>
          {/*  */}
          <a className={styles.btn_logo} href=".">
            <img src={logo} alt="Logo" />
          </a>

          <button className={styles.btn_toggle_nav} onClick={toggleNav}>
            <img src={menu} alt="" />
          </button>
          {/*  */}
          <div className={`${styles.container} ${styles}`} ref={navContainer}>
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

            <button className={styles.btn_cta}>Schedule a Demo</button>
          </div>
          {/*  */}
        </div>
      </nav>
    </>
  );
};

export default Nav;
