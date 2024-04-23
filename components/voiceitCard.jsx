const VoiceCard = ({ img, text }) => {
  return (
    <div
      style={{
        minWidth: window.innerHeight > window.innerWidth ? "60vw" : "40vh",
        height: window.innerHeight > window.innerWidth ? "90vw" : "60vh",
        backgroundColor: "white",
        margin: "5%",
        borderRadius: "15px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div>
        <a href="https://www.youtube.com/@IEEEPIEKeralaSection">
          <img
            style={{
              position: "absolute",
              top: "0%",
              left: "0%",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              // overflow: "hidden",
              justifyContent: "center",
            }}
            src={img}
            alt="event.png"
          />
        </a>
      </div>
    </div>
  );
};

export default VoiceCard;
