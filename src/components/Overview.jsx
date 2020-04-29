import React from "react";

import ProteinIntake from "./ProteinIntake";
import CarbIntake from "./CarbIntake";
import FatIntake from "./FatIntake";


const Overview = (props) => {
    console.log(props)
  return (
    <div >
      <ProteinIntake />
      <CarbIntake  />
      <FatIntake  />
      
    </div>
  );
};

export default Overview;