import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Featured from "../components/Featured";
import heroStyles from "./../styles/Hero.module.scss";

const Home = () => {
  return (
    <>
      <main>
        <div className={heroStyles.outerWrapper}>
          <Nav />
          <Hero />
        </div>
        <Featured />
      </main>
    </>
  );
};

export default Home;
