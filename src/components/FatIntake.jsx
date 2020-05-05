import React from "react";


const FatIntake = (props) => {
  return (
    <div className='ctp'>
      <h2>Fat</h2>
     
      <span>You need {props.qty}g</span>
      <p>
        Fats is needed for hormone production, cholesterol and cell membrane
        formation, protect organs, supply vitamins (A,D,E,K) and gives the main
        energy source for the body at rest.
      </p>
    </div>
  );
};

export default FatIntake;