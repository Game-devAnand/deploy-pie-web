import styles from "./Footer.module.css";

function Footer2() {
  return (
    <div>
      <div className={styles.footer}>
        <footer className={styles.frameParent}>
          <div className={styles.containerWrapper}>
            <div className={styles.container}>
              <div className={styles.headerContentParent}>
                <div className={styles.headerContent}>
                  <div className={styles.logo}>
                    <img
                      className={styles.image11Icon}
                      alt=""
                      src="/pielogo.png"
                    />
                  </div>
                  <div className={styles.msgbar}>
                    <div className={styles.msgbarChild} />
                    <input
                      className={styles.inputField}
                      placeholder="Enter your message"
                      type="text"
                    />
                    <div className={styles.sendButtonArea}>
                      <div className={styles.buttonIcon}>
                        <div className={styles.buttonIconChild} />
                        <img
                          className={styles.image12Icon}
                          alt=""
                          src="/image-12-1@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.navigationLinks}>
                  <div className={styles.plansPricingParent}>
                    <a
                      href="https://www.ieee.org/"
                      className={styles.plansPricing}
                    >{`IEEE org`}</a>
                    <a
                      href="https://ieee-collabratec.ieee.org/"
                      className={styles.features}
                    >
                      IEEE Collabratec
                    </a>
                    <a
                      href="https://www.ieeer10.org/"
                      className={styles.newsBlogs}
                    >{`IEEE Region 10`}</a>
                    <a
                      href="https://ieeexplore.ieee.org/Xplore/home.jsp"
                      className={styles.careers}
                    >
                      IEEE Xplore Digital Library
                    </a>
                  </div>
                  <div className={styles.aboutUsParent}>
                    <a href="/about" className={styles.aboutUs}>
                      About Us
                    </a>
                    <a
                      href="https://ieeekerala.org/"
                      className={styles.documentation}
                    >
                      IEEE Kerala Section
                    </a>
                    <a
                      href="https://www.ieee.org/membership/join/index.html?WT.mc_id=hc_join"
                      className={styles.papers}
                    >
                      Join IEEE
                    </a>
                    <a
                      href="https://www.ieee.org/sitemap.html"
                      className={styles.pressConferences}
                    >
                      More Links
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.socialMediaBar}>
                <a href="https://www.instagram.com/ieeepie.kerala/" className={styles.instagram}>
                  <img className={styles.igIcon} alt="" src="icon/inst.png" />
                </a>
                <a href="https://www.facebook.com/ieeepieks" className={styles.facebook}>
                  <img className={styles.fbIcon} alt="" src="icon/fb.png" />
                </a>
                <a href="https://www.linkedin.com/company/ieee-pie-kerala-section/" className={styles.linkedin}>
                  <img
                    className={styles.linkedinIcon}
                    alt=""
                    src="icon/Ldin.png"
                  />
                </a>
                <a href="https://open.spotify.com/show/0efNfgAgQScY8NJeYtUMzB?si=vUpL8efCQua7Ia34cgCz0w&utm_source=copy-link&nd=1&dlsi=511b0693248e4ba6" className={styles.spotify}>
                  <img
                    className={styles.spotifyIcon}
                    alt=""
                    src="icon/sp.png"
                  />
                </a>
                <a href="https://www.youtube.com/@IEEEPIEKeralaSection" className={styles.yt}>
                  <img
                    className={styles.ytIcon}
                    loading="lazy"
                    alt=""
                    src="icon/yt.png"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.footerLine} />
        </footer>
        <div className={styles.footerContent}>
          <div className={styles.container1}>
            <div className={styles.copyright2023}>
              Copyright © 2023 IEEE PIE KERALA SECTION
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer2;
