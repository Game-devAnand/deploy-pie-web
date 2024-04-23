import MajorEvents from "./majorEvents";
import PiePodsEvent from "./piePods";
import RecentEvents from "./recentEvents";
import VoiceIt from "./voiceIt";
import Desc from "./desc";

const Events = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Desc />
      <RecentEvents />
      <MajorEvents />
      <PiePodsEvent />
      <VoiceIt />
    </div>
  );
};

export default Events;
