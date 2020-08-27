import React from "react";
import IntakeTrendGraph from './IntakeTrendGraph'
import ProteinIntake from "./ProteinIntake";
import CarbIntake from "./CarbIntake";
import FatIntake from "./FatIntake";
import {Card} from 'primereact/card'
import {Button} from 'primereact/button'
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

  const proteinheader = (
    <img alt="Card" src='https://www.lovelilbucks.com/wp-content/uploads/2019/04/protein-icon.png'/>
);

  const carbheader =(
    <img alt="Card" src='https://cdn2.iconfinder.com/data/icons/food-solid-icons-vol-6/48/254-512.png'/>  )

    const fatheader = (
      <img alt="Card" src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJTZhP6VaGgO5f3IySf4ZFGhP4OztddZzf7SPMVPES3Vxnslnc&usqp=CAU'/>
      
    )
const footer = (
  <span>
      <Button label="Save" icon="pi pi-check"/>
      <Button label="Cancel" icon="pi pi-times" className="p-button-secondary"/>
  </span>
);

  return (
    <div >
      <h1>You need a total of {calorieIntake} calories a day</h1>
      <div className='row'>
      <Card title="Protein" style={{width: '360px'}} className="ui-card-shadow" footer={footer} header={proteinheader}>
      <h2>Protein</h2>
      <span>"You need {macros.protein}g a day"</span>
      <div>
        Protein is essential for growth and on-going repair, nitrogen balance,
        enzymes that catalyse innumerable chemical reactions, cell signalling
        and signal transaction.
      </div>
      </Card>
      <Card title="Carbohydrates"  style={{width: '360px'}} className="ui-card-shadow" footer={footer} header={carbheader}>
        <div>
          <span>You need {macros.carb}g a day</span>
          <br/>
        Carb is not essential but it is the bodies preferred energy source,
        especially during stress and exercise. When glycogen levels get low in
        the body, cortisol levels rise.
        </div>
      </Card>
      <Card title="Fats"  style={{width: '360px'}} className="ui-card-shadow" footer={footer} header={fatheader}>
        <div>
        <span>You need {macros.fat}g a day</span>
        <br/>
        Fats is needed for hormone production, cholesterol and cell membrane
        formation, protect organs, supply vitamins (A,D,E,K) and gives the main
        energy source for the body at rest.
        </div>
      </Card>
      </div>
      <IntakeTrendGraph />
    </div>
  )
}


export default Profile;