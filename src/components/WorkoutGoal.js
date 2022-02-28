import React, { useState } from 'react';
import {Card, Button, Stack} from 'react-bootstrap';
import AddSetModule from './AddSetModule';

export default function WorkoutGoal(props) {
  const {name, sets, reps, weight} = props;
  const [addSetModule, setAddSetModule] = useState(false);
  return (
    <>
    <Card>
      <Card.Title className='text-center'>{name}</Card.Title>
      <Card.Body>
        <Stack direction='horizontal'>
          <Stack>
            <h3>Current Set</h3>
            <p>test</p>
          </Stack>
          <Stack>
            <h3>Goal Set</h3>
            <p>{sets} X {reps} at {weight}lb</p>
          </Stack>
      
        
        </Stack>
      </Card.Body>
      <Card.Footer>
        <Stack direction='horizontal' gap={5} >
        <Button onClick={ () => setAddSetModule(true) }>Add Current Set</Button>
        <Button>Add Notes</Button>
        </Stack>
        </Card.Footer>
    </Card>
    <AddSetModule show={addSetModule} handleClose={() => setAddSetModule(false)}/>
    </>
  )
}
