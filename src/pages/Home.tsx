import Nav from "../components/Nav";
import Hero from "../components/Hero";

import heroStyles from "./../styles/Hero.module.scss";

const Home = () => {
  return (
    <>
      <div className={heroStyles.outerWrapper}>
        <Nav />
        <Hero />
      </div>
    </>
  );
};

export default Home;
