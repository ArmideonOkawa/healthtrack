import React from "react";
// import styles from "./css/IntakeCard.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCheese } from "@fortawesome/free-solid-svg-icons";

const FatIntake = (props) => {
  return (
    <div className='ctp'>
      <h2>Fat</h2>
      {/* <FontAwesomeIcon icon={faCheese} /> */}
      {/* <meter
        className={styles.meter}
        min="0"
        max="100"
        value={props.qty}
        id={styles.fat}
      /> */}
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