import styles from "./../styles/CodeExample.module.scss";
import codeIllustration from "./../assets/home/desktop/illustration-easy-to-implement.svg";

const CodeExample = function () {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.img_wrapper}>
          <img src={codeIllustration} alt="" />
        </div>
        <div className={styles.content_wrapper}>
          <h2 className={styles.title}>Easy to implement</h2>
          <p className={styles.text}>
            Our API comes with just a few lines of code. You’ll be up and
            running in no time. We built our documentation page to integrate
            payments functionality with ease.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CodeExample;
