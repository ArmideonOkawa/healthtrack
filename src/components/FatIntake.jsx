import React from "react";
import {Card} from 'primereact/card';

const FatIntake = (props) => {
  return (
    <div className='ctp'>
      <Card style={{width: '360px'}}>
      <h2>Fat</h2>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJTZhP6VaGgO5f3IySf4ZFGhP4OztddZzf7SPMVPES3Vxnslnc&usqp=CAU'/>
      <span>You need {props.qty}g a day</span>
      <p>
        Fats is needed for hormone production, cholesterol and cell membrane
        formation, protect organs, supply vitamins (A,D,E,K) and gives the main
        energy source for the body at rest.
      </p>
      </Card>
    </div>
  );
};

export default FatIntake;