import Card from "../../components/card";
import { majorEvents } from "../../Data/majorEvents";

const MajorEvents = () => {
  const generateCards = () =>
    majorEvents.map((item) => (
      <Card key={item.id} img={item.img} text={item.name} />
    ));

  return (
    <>
      <h1>Major Events</h1>
      <div
        style={{
          display: "flex",
          justifyContent:
            window.innerHeight > window.innerWidth
              ? "center"
              : "space-around",
          width: "100vw",
          alignItems: "center",

          // overflowX: "scroll",
          flexWrap: "wrap",
          // margin: "0 auto",
          // scrollbar-width: "none",
        }}
      >
        {generateCards()}
      </div>
    </>
  );
};

export default MajorEvents;
