import React from "react";


const ProteinIntake = (props) => {
  return (
    <div className='box'>
      <h2>Protein</h2>
      
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