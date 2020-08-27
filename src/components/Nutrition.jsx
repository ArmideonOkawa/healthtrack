import React from 'react'
import { Form, Button} from 'semantic-ui-react'

const options = [
    {  text: 'Chicken', value: 'chicken' },
    {  text: 'Tuna', value: 'tuna' },
    { text: 'Brown Rice', value: 'brown rice' },
  ]

  const meals = [
      {text: 'Breakfast', value: 'breakfast'},
      {text: 'Lunch', value: 'lunch'},
      {text: 'snack', value: 'snack'}
  ]

  const oz = [
      {number: 1},{number: 2},{number: 3},{number: 4},{number: 5},{number: 6},{number: 7},{number: 8},{number: 9},{number: 10}]
class Nutrition extends React.Component {


  render() {
     
    return (
        <div className='foodlog'>
      <h1>Food Log</h1>
      <Form>
        <Form.Group inline>
        <Form.Select fluid label='meal'  options={meals} placeholder='meal' />
        <Form.Select
            fluid
            label='Food'
            options={options}
            placeholder='Foods'
          />
          <Form.Select
          fluid
          label='oz'
          options={oz}
          placeholder='oz'
          />
        </Form.Group>
        <Button>Log Food</Button>
      </Form>
      </div>

    )
}
}

export default Nutrition;