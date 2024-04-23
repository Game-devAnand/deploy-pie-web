import styles from "./Execom.module.css";
import CoreTeam from "./cards/core";
import ProfTeam from "./cards/profCard";
import SubTeam from "./cards/subCard";
function Execom() {
  return (
    <div className={styles.main}>
      <div className={styles.execomImg}>
        <img className={styles.image} src="/execom.png" alt="" />
      </div>
      <ProfTeam />
      <CoreTeam />
      <SubTeam />
    </div>
  );
}

export default Execom;
