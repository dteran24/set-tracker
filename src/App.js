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
  const [showAbout, setShowAbout] = useState(false);
  const [addSetModuleGoalID, setAddSetModuleGoalID] = useState();
  const { workoutGoals, currentSet } = useWorkoutGoalContext();
 

  function openAddSetModule(goalID){
    setAddSetModule(true)
    setAddSetModuleGoalID(goalID);
  }
  


  console.log(workoutGoals);
  console.log(currentSet);
  

  return (
    <>
          
          <Stack className="col-md-5 mx-auto my-5"  gap={3}>
          {workoutGoals.length === 0 ?
           <Container className='text-center'>
            <h1>Goal Tracker</h1>
           </Container>
           : ""}
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
        {workoutGoals.length === 0 ? <Button className='mx-5' onClick={() => setShowAbout(!showAbout)} >About</Button> : ""}
        { showAbout && workoutGoals.length == 0 ? <Container><p>This application was created to help keep track of my progress during my workouts. 
          You create a goal for a specific workout with a certain amout of <b>sets</b> x <b>reps</b> and <b>weight</b>. 
          Each attempt will be logged to see your progress. You will have bad days and good. More updates with features will come along.</p></Container> : ""
        }
        
        </Stack>
    <AddSetModule show={addSetModule} handleClose={() => setAddSetModule(false)} defaultGoalID ={addSetModuleGoalID}/>
    <AddModule show={goalShowModal} handleClose={() => goalSetShowModal(false)}
      />
    </>
  );
}

export default App;
