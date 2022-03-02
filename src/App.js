import './App.css';
import { useState } from 'react';
import {Stack, Button, Container} from 'react-bootstrap';
import AddModule from './components/AddGoalModule';
import WorkoutGoal from './components/WorkoutGoal';
import AddSetModule from './components/AddSetModule';
import { useWorkoutGoalContext } from './context/WorkoutGoalContext';

function App() {
  const [goalShowModal, goalSetShowModal] = useState(false);
  const [addSetModule, setAddSetModule] = useState(false);
  const [addSetModuleGoalID, setAddSetModuleGoalID] = useState()
  const { workoutGoals, currentSet } = useWorkoutGoalContext();

  function openAddSetModule(goalID){
    setAddSetModule(true)
    setAddSetModuleGoalID(goalID);
  }
  
  console.log(workoutGoals);
  console.log(currentSet);
  
  return (
    <>
        
          <Container className='text-center'>
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
          <Stack className="col-md-5 mx-auto" gap={3}>
        {workoutGoals.map(goal =>(

          <WorkoutGoal
            key={goal.id}
            goalID ={goal.id}
            name= {goal.name} 
            sets={goal.sets} 
            reps= {goal.reps} 
            weight={goal.weight}
            />
            
            
        ))}
        
        {workoutGoals.length === 0 ? null : <Button onClick={openAddSetModule}>Add Set</Button>}
        <Button onClick={() => goalSetShowModal(true)}>Add Goal</Button>
       
        </Stack>
        
    <AddSetModule show={addSetModule} handleClose={() => setAddSetModule(false)} defaultGoalID ={addSetModuleGoalID}/>
    <AddModule show={goalShowModal} handleClose={() => goalSetShowModal(false)}
      />
    </>
  );
}

export default App;
