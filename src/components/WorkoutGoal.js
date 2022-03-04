import {Card, Button, Stack, Container} from 'react-bootstrap';
import { useWorkoutGoalContext } from '../context/WorkoutGoalContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashCan, faCheckCircle, } from '@fortawesome/free-solid-svg-icons'


export default function WorkoutGoal(props) {
  const {name, sets, reps, weight, goalID, complete } = props;
  const { removeWorkoutGoal, getGoalSets, workoutGoals } = useWorkoutGoalContext();
 
  const currentSet = getGoalSets(goalID);
  const goal = workoutGoals.find(b => b.id === goalID);
  let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear(); 
  

  
  return (
    <Container>
    <Card>
      <Card.Title>
        <Container className='d-flex justify-content-between my-2'>
          <h2>{name}</h2>
          <Button variant='danger' onClick={() => removeWorkoutGoal(goal)}>
            <FontAwesomeIcon icon={faTrashCan}/>
          </Button>
        </Container>
      </Card.Title>
      <Card.Body>
        <Stack direction='horizontal' gap={3}>
          <Stack>
            <h3>Current Sets</h3>
            <div style={{height:'8rem', overflowY:'auto'}}>
            {currentSet.length === 0 ? 
            (<p>No Current Set</p>):
            (currentSet.reverse().map( set => (
              <p key={set.id}>{set.sets} x {set.reps} at {set.weight}lbs <span>{month}-{date}-{year}</span></p>
            )))}
          </div>
          </Stack>
          <Stack>
            <h3>Goal</h3>
            <p>{sets} x {reps} at {weight}lbs</p>
          </Stack>
        </Stack>
      </Card.Body>
      <Card.Footer className='text-center'>
        {complete === "true" ? <p>Goal Complete!<FontAwesomeIcon icon={faCheckCircle}/></p> : ""}
        <p>Created {month}-{date}-{year}</p>
      </Card.Footer>
    </Card>
    
    </Container>
  )
}
