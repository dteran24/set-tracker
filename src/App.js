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

          <Stack className="col-md-5 mx-auto mb-3" gap={3}>
        {workoutGoals.map(goal =>(

          <WorkoutGoal
            key={goal.id}
            goalID ={goal.id}
            name= {goal.name} 
            sets={goal.sets} 
            reps= {goal.reps} 
            weight={goal.weight}
            complete={goal.complete}
            />
            
            
        ))}
        
        {workoutGoals.length === 0 ? null : <Button className='mx-5' onClick={openAddSetModule}>Add Set</Button>}
        <Button className='mx-5' onClick={() => goalSetShowModal(true)}>Add Goal</Button>
       
        </Stack>
        
    <AddSetModule show={addSetModule} handleClose={() => setAddSetModule(false)} defaultGoalID ={addSetModuleGoalID}/>
    <AddModule show={goalShowModal} handleClose={() => goalSetShowModal(false)}
      />
    </>
  );
}

export default App;
