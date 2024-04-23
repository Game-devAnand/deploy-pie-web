import styles from "./About.module.css";
function HomeAbout() {
  return (
    <div>
      <div className="about">
        <section className={styles.aboutUs}>
          <div className={styles.textContainer}>
            <h2 className={styles.aboutFont}>About Us</h2>
            <div className={styles.imageContainer}>
              <img
                className={styles.leftImage}
                src="/image-15@2x.png"
                alt="About Us - Left Image"
              />
              <img
                className={styles.centerImage}
                src="/image-13@2x.png" // Replace with actual image path
                alt="About Us - Center Image"
              />
              <img
                className={styles.rightImage}
                src="/image-14@2x.png"
                alt="About Us - Right Image"
              />
            </div>
            <div className={styles.aboutUsText}>
              <p>
                Promotion of Innovation and Entrepreneurship intends to support
                engineers in pursuing entrepreneurship, have a better
                understanding of Startups and supports them by giving them
                access to the right platforms and resources.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomeAbout;
