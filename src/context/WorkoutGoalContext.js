import React, {useContext, useState} from 'react';
import useLocalStorage from '../hooks/UseLocalStorage';

const WorkoutGoalContext = React.createContext();

export function useWorkoutGoalContext (){
    return useContext(WorkoutGoalContext);
}

export const WorkoutGoalProvider = ({children}) => {
    const [workoutGoals, setWorkoutGoals] = useState([]);

    function addWorkoutGoal({name, sets, weight}) {
        setWorkoutGoals(prevWorkoutGoal => {
            if (prevWorkoutGoal.find(workout => workout.name === name)){
                return prevWorkoutGoal;
            }
            return [...prevWorkoutGoal, {id: name, sets, weight}]
        })
    }
        
    return (
        <WorkoutGoalContext.Provider
            value ={{addWorkoutGoal, workoutGoals}}>
                {children}
        </WorkoutGoalContext.Provider>
    )
}