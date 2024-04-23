import { awards } from "../../Data/awards";
import Card from "../../components/card";
import AwardsCard from "../../components/AwardsCard";

const AwardBottom = () => {
  const generateCards = () => {
    return awards.map(({ img, dec, name, id }) => (
      <AwardsCard img={img} name={name} dec={dec} flag={id % 2} />
    ));
  };
  // awards.map((item) => (
  //   <div key={item.id} style={{ border: "1px solid" }}>
  //     <Card key={item.id} img={item.img} text={item.name} />
  //     <p>{item.name}</p>
  //     <p>{item.dec}</p>
  //   </div>
  // ));

  return (
    <>
      <br />
      <br />
      <br />
      <p
        style={{
          fontSize: window.innerHeight > window.innerWidth ? "2em" : "3.5em",
          fontWeight: "800",
        }}
      >
        OUR AWARDS
      </p>
      <br />
      <div>{generateCards()}</div>

      {/* <div
        style={{
          display: "flex",
          justifyContent:
            window.innerHeight > window.innerWidth
              ? "flex-start"
              : "space-around",
          width: "100vw",
          alignItems: "center",
          overflowX:
            window.innerHeight > window.innerWidth ? "scroll" : "hidden",
        }}
      >
        {generateCards()}
      </div> */}
    </>
  );
};

export default AwardBottom;
