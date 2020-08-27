import React from "react";
import {Card} from 'primereact/card';


const  ProteinIntake = (props) => {

  const header = (
    <img alt="Card" src='https://www.lovelilbucks.com/wp-content/uploads/2019/04/protein-icon.png'/>
);
  return (
    
    <div>
      <Card title="Protein" style={{width: '360px'}}>
      <h2>Protein</h2>
      <img src='https://www.lovelilbucks.com/wp-content/uploads/2019/04/protein-icon.png'/>
      <span>You need {props.qty}g a day</span>
      <p>
        Protein is essential for growth and on-going repair, nitrogen balance,
        enzymes that catalyse innumerable chemical reactions, cell signalling
        and signal transaction.
      </p>
      </Card>
    </div>
  );
};


export default ProteinIntake;