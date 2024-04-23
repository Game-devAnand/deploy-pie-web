const AwardTop = () => {
  const pc = {
    display: "flex",
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
  };

  const mob = {};
  return (
    <>
      <p
        style={{
          fontSize: window.innerHeight > window.innerWidth ? "2em" : "3.5em",
          fontWeight: "800",
        }}
      >
        WHAT ARE AWARDS?
      </p>
      <br />
      <div
        style={{
          display: "flex",
          width: "90%",
          // border: "1px solid",
          flexDirection:
            window.innerHeight > window.innerWidth ? "column-reverse" : "row",
          justifyContent: "center",
          alignItems: "center",
          margin: 0,
        }}
      >
        <div
          style={
            window.innerHeight < window.innerWidth
              ? { width: "38%", fontSize: "1.2em", marginRight: "3vw" }
              : { width: "100%" }
          }
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit
          est leo, ac vulputate ante dignissim eget. Morbi sed nisi quis nunc
          pellentesque lobortis vitae id metus. Maecenas blandit libero sit amet
          sem dictum porttitor. Sed maximus, nisi non accumsan luctus, velit
          urna varius lacus, vel elementum lectus lorem non.
        </div>
        <img
          src="/images/aboutpic.jpg"
          alt="Who We Are"
          style={
            window.innerHeight < window.innerWidth
              ? {
                  width: "45%",
                  borderRadius: "10px",
                }
              : { width: "100%", borderRadius: "10px", marginBottom: "3vh" }
          }
        />
      </div>
    </>
  );
};

export default AwardTop;

