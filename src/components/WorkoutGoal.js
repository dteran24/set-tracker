import React, { useState } from 'react';
import {Card, Button, Stack} from 'react-bootstrap';
import AddSetModule from './AddSetModule';
import { useWorkoutGoalContext } from '../context/WorkoutGoalContext';

export default function WorkoutGoal(props) {
  const {name, sets, reps, weight} = props;
  const [addSetModule, setAddSetModule] = useState(false);
  const { currentSet } = useWorkoutGoalContext();
  return (
    <>
    <Card>
      <Card.Title className='text-center'>{name}</Card.Title>
      <Card.Body>
        <Stack direction='horizontal'>
          <Stack>
            <h3>Current Set</h3>
            {currentSet.map( set => (
              <p key={set.id}>{set.sets} X {set.reps} at {set.weight}lb</p>
            ))}
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
