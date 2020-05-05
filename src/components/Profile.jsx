import React from "react";
import IntakeTrendGraph from './IntakeTrendGraph'
import ProteinIntake from "./ProteinIntake";
import CarbIntake from "./CarbIntake";
import FatIntake from "./FatIntake";


const Profile = (props) => {
  console.log(props)
  const { weight, age } = props.userInfo;
  const calorieIntake =
    10 * weight - 5 * age;
  const macros = {
    protein: Math.floor((0.3 * calorieIntake) / 4),
    fat: Math.floor((0.3 * calorieIntake) / 9),
    carb: Math.floor((0.4 * calorieIntake) / 4),
  };

  return (
    <div >
      <ProteinIntake qty={macros.protein}  />
      <CarbIntake  qty={macros.carb} />
      <FatIntake  qty={macros.fat}/>
      <h1>You need a total of {calorieIntake} calories a day</h1>
      <IntakeTrendGraph />
    </div>
  )
}


export default Profile;