import Card from "../../components/card";
import VoiceCard from "../../components/voiceitCard";
import { voiceData } from "../../Data/voiceIt";

const VoiceIt = () => {
  const generateCards = () =>
    voiceData.map((item) => (
      <VoiceCard key={item.id} img={item.img} text={item.name} />
    ));

  return (
    <>
      <h1>Voice It</h1>
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
      <div
        style={{
          padding: "5vh",
          paddingBottom: "10vh",
        }}
      >
        <a
          style={{ textDecoration: "none" }}
          href="https://www.youtube.com/@IEEEPIEKeralaSection"
          className="join-us-button"
        >
          View More
        </a>
      </div>
    </>
  );
};

export default VoiceIt;
