const AwardsCard = ({ name, dec, img, flag }) => {
  return (
    <div
      style={{
        width: "80vw",
        // border: "1px solid",
        display: "flex",
        justifyContent: "space-around",
        flexDirection:
          window.innerHeight > window.innerWidth
            ? "column"
            : flag
            ? "row"
            : "row-reverse",
        marginBottom: "5vh",
      }}
    >
      <div
        style={
          window.innerHeight < window.innerWidth
            ? {
                height: "25vw",
                width: "25vw",
                backgroundColor: "white",
                backgroundImage: `url(${img})`,
                borderRadius: "10px",
                backgroundSize: "cover",
              }
            : {
                width: "80vw",
                height: "80vw",
                backgroundColor: "white",
                backgroundImage: `url(${img})`,
                borderRadius: "10px",
                backgroundSize: "cover",
              }
        }
      ></div>
      <div
        style={
          window.innerHeight < window.innerWidth
            ? {
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "40%",
              }
            : {
                width: "100%",
              }
        }
      >
        <p
          style={{
            fontSize: "3em",
            fontWeight: "800",
            margin: 0,
            textAlign: "center",
          }}
        >
          {name}
        </p>
        <p style={{ fontSize: "1.1em", margin: 0, textAlign: "center" }}>
          {dec}
        </p>
      </div>
    </div>
  );
};

export default AwardsCard;
