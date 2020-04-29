import React from "react";
// import styles from "./css/IntakeCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEgg } from "@fortawesome/free-solid-svg-icons";

const ProteinIntake = (props) => {
  return (
    <div className='box'>
      <h2>Protein</h2>
      <FontAwesomeIcon icon={faEgg} />
      
      <span>You need {props.qty}g</span>
      <p>
        Protein is essential for growth and on-going repair, nitrogen balance,
        enzymes that catalyse innumerable chemical reactions, cell signalling
        and signal transaction.
      </p>
    </div>
  );
};

export default ProteinIntake;