const Card = ({ img, text }) => {
  return (
    <div
      style={{
        minWidth: window.innerHeight > window.innerWidth ? "60vw" : "40vh",
        height: window.innerHeight > window.innerWidth ? "90vw" : "60vh",
        backgroundColor: "white",
        margin: "3%",
        borderRadius: "15px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div>
        <img
          style={{
            position: "absolute",
            top: "0%",
            left: "-30%",
            width: "auto",
            height: "105%",
            objectFit: "cover",
            overflow: "hidden",
            justifyContent: "center",
          }}
          src={img}
          alt="event.png"
        />
        <h1>{text}</h1>
      </div>
    </div>
  );
};

export default Card;
