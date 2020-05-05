import React from "react";


const CarbIntake = (props) => {
  return (
    <div className='ctp'>
      <h2>Carb</h2>
     
      
      <span>You need {props.qty}g</span>
      <p>
        Carb is not essential but it is the bodies preferred energy source,
        especially during stress and exercise. When glycogen levels get low in
        the body, cortisol levels rise.
      </p>
    </div>
  );
};

export default CarbIntake;
