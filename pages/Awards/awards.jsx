import AwardBottom from "./awardBottom";
import AwardTop from "./awardsTop";

const Awards = () => {
  // const generateCards = () =>
  //   awards.map((item) => (
  //     <div key={item.id}>
  //       <Card key={item.id} img={item.img} text={item.name} />
  //       <p>{item.name}</p>
  //       <p>{item.dec}</p>
  //     </div>
  //   ));
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <AwardTop />
      <AwardBottom />
    </div>
  );
};

export default Awards;
