import {Modal, Form, Button, Stack} from 'react-bootstrap';
import React, {useRef} from 'react';
import { useWorkoutGoalContext } from '../context/WorkoutGoalContext';

export default function AddSetModule(props) {
    const {handleClose, show, defaultGoalID} = props;
    const {addCurrentSet, workoutGoals} = useWorkoutGoalContext();
    const setsRef = useRef();
    const repsRef = useRef();
    const weightRef = useRef();
    const goalIDRef = useRef();
    
    

    function handleSubmit(e){
    e.preventDefault();
    addCurrentSet({
        sets: setsRef.current.value,
        reps: repsRef.current.value,
        weight: weightRef.current.value,
        goalID: goalIDRef.current.value,
            
    })
    goalCheck(goalIDRef.current.value, setsRef.current.value, repsRef.current.value, weightRef.current.value);    
    handleClose();

    }
    function goalCheck(id, sets, reps, weight){
        let searchedGoal = workoutGoals.find(b => b.id === id);
        let check = workoutGoals.find(goal => 
                goal.id === id && 
                goal.sets === sets &&
                goal.weight === weight &&
                goal.reps === reps);
            console.log(check);
        
        if(check !== undefined){
            searchedGoal.complete = "true"
        }
    }

    


 
    return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Current Set</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId='goalID'>
                <Form.Label>Workout Name</Form.Label>
                <Form.Select defaultValue={defaultGoalID} ref={goalIDRef}>
                    {workoutGoals.map(goal => (
                        <option key={goal.id} value={goal.id}>{goal.name}</option>
                    ))}
                </Form.Select>
            </Form.Group>
            <Stack direction='horizontal' gap={5}>
            <Form.Group controlId='sets'>
                <Form.Label>Number of Sets</Form.Label>
                <Form.Control ref={setsRef} min={1} type='number' required/>
            </Form.Group>
            <Form.Group controlId='sets'>
                <Form.Label>Number of Reps</Form.Label>
                <Form.Control ref={repsRef} min={1} type='number' required/>
            </Form.Group>
            </Stack>
            <Form.Group controlId='weight'>
                <Form.Label>Weight</Form.Label>
                <Form.Control ref={weightRef} min={5} type='number'required/>
            </Form.Group>
            <div className='d-flex'>
                <Button className='my-3 mx-auto' type='submit'>Submit</Button>
            </div>
            
        </Form>
        </Modal.Body>
    </Modal>
  )
}
