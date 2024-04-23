import Card from "../../components/card";
import { recentEvents } from "../../Data/recentEvents";

const RecentEvents = () => {
  const generateCards = () =>
    recentEvents.map((item) => (
      <Card key={item.id} img={item.img} text={item.name} />
    ));

  return (
    <>
      <h1>Recent Events</h1>
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
    </>
  );
};

export default RecentEvents;
