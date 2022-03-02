import React, { useState } from 'react';
import {Card, Button, Stack} from 'react-bootstrap';
import AddSetModule from './AddSetModule';
import { useWorkoutGoalContext } from '../context/WorkoutGoalContext';

export default function WorkoutGoal(props) {
  const {name, sets, reps, weight, goalID} = props;
  const { removeWorkoutGoal, getGoalSets, workoutGoals } = useWorkoutGoalContext();
  const currentSet = getGoalSets(goalID);
  const goal = workoutGoals.find(b => b.id === goalID);
  return (
    <>
    <Card>
      <Card.Title>{name}</Card.Title>
      <Card.Body>
        <Stack direction='horizontal'>
          <Stack>
            <h3>Current Set</h3>
            {currentSet.length === 0 ? 
            (<p>No Current Set</p>): 
            (currentSet.map( set => (
              <p key={set.id}>{set.sets} X {set.reps} at {set.weight}lb</p>
            )))}
          </Stack>
          <Stack>
            <h3>Goal Set</h3>
            <p>{sets} X {reps} at {weight}lb</p>
          </Stack>
      
        
        </Stack>
      </Card.Body>
      <Card.Footer>
        <Stack direction='horizontal' gap={5} >
        <Button>Add Notes</Button>
        <Button variant='danger' onClick={() => removeWorkoutGoal(goal)}>Delete</Button>
        </Stack>
        </Card.Footer>
    </Card>
    
    </>
  )
}
