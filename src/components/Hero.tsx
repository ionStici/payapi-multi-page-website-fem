import styles from "./../styles/Hero.module.scss";
import phone from "./../assets/home/desktop/illustration-phone-mockup.svg";
import bgPatternCircle from "./../assets/shared/desktop/bg-pattern-circle.svg";

const Hero = function () {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.wrapper}>
          <img className={styles.circle} src={bgPatternCircle} alt="" />

          <div className={styles.img_phone_box}>
            <img src={phone} alt="" />
          </div>

          <div>
            <h1>Start building with our APIs for absolutely free.</h1>

            <form>
              <input type="text" placeholder="Enter email address" />
              <button>Schedule a Demo</button>
            </form>

            <p>
              Have any questions? <span>Contact Us</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
