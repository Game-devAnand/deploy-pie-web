import styles from "./Info.module.css";
function HomeInfoCard() {
  return (
    <div>
      <div className={styles.fontBox}>
        <div data-aos="zoom-in-up">
          <div className={styles.fontCenter}>
            <p className={styles.fontOrange}>30+</p>
            <p className={styles.fontWhite}>EVENTS</p>
          </div>
        </div>
        <div data-aos="zoom-in-up">
          <div className={styles.fontCenter}>
            <p className={styles.fontOrange}>300+</p>
            <p className={styles.fontWhite}>PARTICIPANTS</p>
          </div>
        </div>
        <div data-aos="zoom-in-up">
          <div className={styles.fontCenter}>
            <p className={styles.fontOrange}>6</p>
            <p className={styles.fontWhite}>AWARDS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeInfoCard;
