import React from "react";
// import styles from "./css/IntakeCard.css";
import { FontAwesomeIcon } from 'react-fontawesome';
// import { faCheese } from "free-solid-svg-icons";

const FatIntake = (props) => {
  return (
    <div className='ctp'>
      <h2>Fat</h2>
      <span>You need {props.qty}g a day</span>
      <p>
        Fats is needed for hormone production, cholesterol and cell membrane
        formation, protect organs, supply vitamins (A,D,E,K) and gives the main
        energy source for the body at rest.
      </p>
    </div>
  );
};

export default FatIntake;