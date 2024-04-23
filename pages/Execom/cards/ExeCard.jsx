//import execomSphere from "../public/execomSphere.png";
import styles from "./Execom.module.css";

const ExeCard = ({ img, name, pos }) => {
  return (
    <div className={styles.main}>
      <div className={styles.image}>
        <img src="/execomSphere.png" className={styles.execomSphere} />
        <img src={img} className={styles.execomPerson} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.name}>{name}</div>
        <div className={styles.pos}>{pos}</div>
        <div className={styles.linkSpace}>
          <a className={styles.socialLinks}>
            <img alt="" src="icon/Ldin.png" />
          </a>
          <a className={styles.socialLinks}>
            <img alt="" src="icon/inst.png" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ExeCard;
