//import execomSphere from "../public/execomSphere.png";
import styles from "./Footer.module.css";

const ExecomCard = (props) => {
  return (
    <div
      style={{
        width: "20vw",
        height: "22vw",
        // border: "1px solid",
        borderRadius: "15px",
      }}
    >
      <div
        style={{
          height: "60%",
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src="/execomSphere.png"
          style={{ width: "80%", position: "absolute", alignSelf: "flex-end" }}
        />
        <img
          src="/execomImg.png"
          style={{ height: "99%", position: "absolute", alignSelf: "flex-end" }}
        />
      </div>
      <div
        style={{
          height: "30%",
          marginTop: "3%",
          //   border: "1px solid",
          fontSize: "0.4em",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <div style={{ fontWeight: "700", fontSize: "1.1em" }}>
          CHACKOCHAN JOSE
        </div>
        <div>WEB DEVELOPER</div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            // border: "1px solid",
            width: "20%",
          }}
        >
          {/* <button className={styles.linkedin}> */}
          <img className={styles.linkedinIcon} alt="" src="icon/Ldin.png" />
          {/* </button> */}
          {/* <button className={styles.instagram}> */}
          <img className={styles.igIcon} alt="" src="icon/inst.png" />
          {/* </button> */}
        </div>
      </div>
    </div>
  );
};

export default ExecomCard;
