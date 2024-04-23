// import styles from "./Event.module.css";
import { notableEvents } from "../../Data/notableEvents";
import Card from "../../components/card";

const HomeEvents = () => {
  const generateCards = () =>
    notableEvents.map((item) => (
      <Card key={item.id} img={item.img} text={item.name} />
    ));

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Notable Events</h1>
      <div
        style={{
          display: "flex",
          justifyContent:
            window.innerHeight > window.innerWidth
              ? "flex-start"
              : "space-around",
          width: "100vw",
          alignItems: "center",
          overflowX: "scroll",
          scrollbarWidth: "none",
        }}
      >
        {generateCards()}
      </div>
      <div style={{ textAlign: "center", padding: "35px" }}>
        <a
          style={{ textDecoration: "none" }}
          href="/events"
          className="join-us-button"
        >
          View More
        </a>
      </div>
    </>
  );
};

export default HomeEvents;
