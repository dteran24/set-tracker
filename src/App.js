import './App.css';
import { useState } from 'react';
import {Card, Stack, Button, Container} from 'react-bootstrap';
import AddModule from './components/AddGoalModule';
import WorkoutGoal from './components/WorkoutGoal';
import { useWorkoutGoalContext } from './context/WorkoutGoalContext';

function App() {
  const [goalShowModal, goalSetShowModal] = useState(false);
  
  const { workoutGoals } = useWorkoutGoalContext();
  
  console.log(workoutGoals);
  return (
    <>
        <Stack>
          <Container>
            <p>Welcome to my Fitness Tracker. Here you can track your workouts in the most simplistic way using the progressive overload method. Recommended for people who have a current workout plan.<br/>
            How it Works:
            </p>
            <ol>
              <li>Set a Goal</li>
              <li>Set your Current Lift</li>
              <li>Edit your lift when your reps increase</li>
              <li>Once your current lift reaches your goal</li>
            </ol>
          </Container>
          <Stack className="col-md-5 mx-auto">
        {workoutGoals.map(goal =>(
          <WorkoutGoal key={goal.id} name= {goal.id} sets={goal.sets} reps= {goal.reps} weight={goal.weight}/>
        ))}
        <Button className='my-5' onClick={() => goalSetShowModal(true)}>Add Goal</Button>
        </Stack>
        </Stack>
   
    <AddModule show={goalShowModal} handleClose={() => goalSetShowModal(false)}
      />
    </>
  );
}

export default App;
