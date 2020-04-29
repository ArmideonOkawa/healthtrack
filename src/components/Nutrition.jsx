import React from 'react'
import { Form } from 'semantic-ui-react'

const options = [
    {  text: 'Chicken', value: 'chicken' },
    {  text: 'Tuna', value: 'tuna' },
    { text: 'Brown Rice', value: 'brown rice' },
  ]

  const oz = [
      {text: '1'},{text: '2'},{text: '3'},{text: '4'},{text: '5'},{text: '6'},{text: '7'},{text: '8'},{text: '9'},{text: '10'}]
class Nutrition extends React.Component {


  render() {
     
    return (
        <div className='foodlog'>
      <h1>Food Log</h1>
      <Form>
        <Form.Group inline>
        <Form.Input fluid label='First name' placeholder='First name' />
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
      </Form>
      </div>

    )
}
}

export default Nutrition;