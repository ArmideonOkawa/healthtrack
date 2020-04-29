import React from "react";
import Trend from "react-trend";

const ProteinIntake = () => {
  return (
    <div >
      <h2>Protein intake trend over time</h2>
      <br />
      <Trend
        smooth
        autoDraw
        autoDrawDuration={3000}
        autoDrawEasing="ease-out"
        data={[1750, 1679, 1700, 1788]}
        gradient={["#00935f", "#00ffb2"]}
        radius={10}
        strokeWidth={2}
        strokeLinecap={"round"}
        
      />
    </div>
  );
};

export default ProteinIntake;