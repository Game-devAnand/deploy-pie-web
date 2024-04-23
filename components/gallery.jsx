import styles from "./Gallery.module.css";

function Gallery() {
  return (
    <div>
      <div className={styles.gallery}>
        <section className={styles.gallery1}>
          <h1 className={styles.heading}>Gallery</h1>
          <img className={styles.gridIcon} alt="" src="/g_temp.svg" />
          <div className={styles.buttons}>
            <button className="join-us-button">View More</button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Gallery;
