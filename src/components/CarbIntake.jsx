import React from "react";
import { Card } from 'primereact/card';

const CarbIntake = (props) => {
  return (
    <div>
      <Card title="Carbohydrates" style={{width: '360px'}}>
      <h2>Carb</h2>
      <img src='https://cdn2.iconfinder.com/data/icons/food-solid-icons-vol-6/48/254-512.png'/>
      {/* <span>You need {macros.carb}g a day.</span> */}
      <div>
      <p>
        Carb is not essential but it is the bodies preferred energy source,
        especially during stress and exercise. When glycogen levels get low in
        the body, cortisol levels rise.
      </p>
      </div>
      </Card>

      
    </div>
  );
};

export default CarbIntake;
