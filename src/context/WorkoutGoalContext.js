import React, {useContext, useState} from 'react';
import { v4 as uuidV4 } from "uuid"
import useLocalStorage from '../hooks/UseLocalStorage';

const WorkoutGoalContext = React.createContext();

export function useWorkoutGoalContext (){
    return useContext(WorkoutGoalContext);
}


export const WorkoutGoalProvider = ({children}) => {
    const [workoutGoals, setWorkoutGoals] = useLocalStorage("Goals",[]);
    const [currentSet, setCurrentSet] = useLocalStorage("Sets",[]);
    

    
  function getGoalSets(goalID) {
    return currentSet.filter(set => set.goalID === goalID)
  }

    function addWorkoutGoal({name, sets, reps, weight, complete}) {
        setWorkoutGoals(prevWorkoutGoal => {
            if (prevWorkoutGoal.find(workout => workout.name === name)){
                return prevWorkoutGoal;
            }
            return [...prevWorkoutGoal, {id: uuidV4(), name, sets, reps, weight, complete}]
        })
    }
    function removeWorkoutGoal({id}) {
        setWorkoutGoals(prevWorkoutGoal => {
            return prevWorkoutGoal.filter(goal => goal.id !== id);
        })
    }


    function addCurrentSet({sets, reps, weight, goalID}) {
        setCurrentSet(prevCurrentSet => {
            return [...prevCurrentSet, {id: uuidV4(), sets, reps, weight, goalID}]
        })
    }
   
    
        
    return (
        <WorkoutGoalContext.Provider
            value ={{addWorkoutGoal, workoutGoals, addCurrentSet, 
                currentSet, removeWorkoutGoal, getGoalSets }}>
                {children}
        </WorkoutGoalContext.Provider>
    )
}