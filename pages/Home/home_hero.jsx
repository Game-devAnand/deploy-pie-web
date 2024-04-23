import styles from "./Home.module.css";

function HomeHero() {
  const handleImageClick = (event) => {
    event.preventDefault();
  };
  return (
    <div className={styles.topDiv}>
      <section className={styles.hero}>
        <div className={styles.imagesParent}>
          <div className={styles.images}>
            <img
              className={styles.image12Icon}
              loading="lazy"
              alt=""
              src="/image-12@2x.png"
            />
            <img className={styles.image11Icon} alt="" src="/image-11@2x.png" />
            <img className={styles.image10Icon} alt="" src="/image-10@2x.png" />
            <img className={styles.image9Icon} alt="" src="/image-9@2x.png" />
            <img className={styles.image8Icon} alt="" src="/image-8@2x.png" />
          </div>
          <img
            className={styles.group11}
            onClick={handleImageClick}
            draggable={false}
            onContextMenu={handleImageClick}
            alt=""
            src="/group-1-1@2x.png"
          />
        </div>
      </section>
    </div>
  );
}

export default HomeHero;
