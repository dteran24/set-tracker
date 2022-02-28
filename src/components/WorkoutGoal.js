import React from 'react';
import {Card, Button, Stack} from 'react-bootstrap';

export default function WorkoutGoal(props) {
  const {name, sets, weight} = props;
  return (
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
            <p>{sets} X {weight}</p>
          </Stack>
      
        
        </Stack>
      </Card.Body>
      <Card.Footer>
        <Stack direction='horizontal' gap={5} >
        <Button>Add Current Set</Button>
        <Button>Add Notes</Button>
        </Stack>
        </Card.Footer>
    </Card>
  )
}
