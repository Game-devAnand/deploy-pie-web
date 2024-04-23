import { useState, useEffect } from "react";
import PodCard from "../../components/podcard";
import { piePods } from "../../Data/piepods";

const PiePodsEvent = () => {
  const [containerWidth, setContainerWidth] = useState("100vw");

  useEffect(() => {
    const handleResize = () => {
      const newWidth =
        window.innerWidth > window.innerHeight ? "125vw" : "350vw";
      setContainerWidth(newWidth);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const generateCards = () =>
    piePods.map((item) => <PodCard key={item.id} src={item.src} />);

  return (
    <>
      <div style={{ width: "100vw" }}>
        <h1>PIE PODS</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            width: "100vw",
            alignItems: "center",
            overflowX: "scroll",
            scrollbarWidth: "none",
          }}
        >
          {generateCards()}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "1vh",
            paddingBottom: "0px",
          }}
        ></div>
      </div>
      <div style={{ paddingBottom: "20px" }}>
        <a
          style={{ textDecoration: "none" }}
          href="https://open.spotify.com/show/0efNfgAgQScY8NJeYtUMzB?si=d00228512eb548fe"
          className="join-us-button"
        >
          Explore More
        </a>
      </div>
    </>
  );
};

export default PiePodsEvent;
