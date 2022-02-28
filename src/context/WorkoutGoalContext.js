import React, {useContext, useState} from 'react';
import { v4 as uuidV4 } from "uuid"
import useLocalStorage from '../hooks/UseLocalStorage';

const WorkoutGoalContext = React.createContext();

export function useWorkoutGoalContext (){
    return useContext(WorkoutGoalContext);
}

export const WorkoutGoalProvider = ({children}) => {
    const [workoutGoals, setWorkoutGoals] = useState([]);
    const [currentSet, setCurrentSet] = useState([]);

    function addWorkoutGoal({name, sets, reps, weight}) {
        setWorkoutGoals(prevWorkoutGoal => {
            if (prevWorkoutGoal.find(workout => workout.name === name)){
                return prevWorkoutGoal;
            }
            return [...prevWorkoutGoal, {id: uuidV4(), name, sets, reps, weight}]
        })
    }
    function addCurrentSet({sets, reps, weight}) {
        setCurrentSet(prevCurrentSet => {
            if (prevCurrentSet.find(set => set.sets && set.reps && set.weight === sets && reps && weight)){
                return prevCurrentSet;
            }
            return [...prevCurrentSet, {id: uuidV4(), sets, reps, weight}]
        })
    }
        
    return (
        <WorkoutGoalContext.Provider
            value ={{addWorkoutGoal, workoutGoals, addCurrentSet, currentSet}}>
                {children}
        </WorkoutGoalContext.Provider>
    )
}