import { coreTeamData } from "../../../Data/Execom/2024";
import ExeCard from "./ExeCard";

const ProfTeam = () => {
  const generateCards = () =>
    coreTeamData.map((item) => (
      <ExeCard key={item.id} img={item.img} name={item.name} pos={item.pos} />
    ));

  return (
    <>
      <h2>PROFESSIONAL EXECOM</h2>
      <div
        style={{
          display: "flex",
          justifyContent:
            window.innerHeight > window.innerWidth
              ? "flex-start"
              : "space-around",
          width: "80vw",
          alignItems: "center",
          // overflowX: "scroll",
          flexWrap: "wrap",
          // scrollbar-width: "none",
          paddingLeft: "10vw",
          paddingRight: "10vw",
        }}
      >
        {generateCards()}
      </div>
    </>
  );
};

export default ProfTeam;
