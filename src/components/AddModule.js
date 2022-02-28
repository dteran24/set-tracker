import {Modal, Form, Button} from 'react-bootstrap';
import React, {useRef} from 'react';
import { useWorkoutGoalContext } from '../context/WorkoutGoalContext';

export default function AddModule(props) {
    const {handleClose, show} = props;
    const {addWorkoutGoal} = useWorkoutGoalContext();
    const nameRef = useRef();
    const setsRef = useRef();
    const weightRef = useRef();
    
    function handleSubmit(e){
    e.preventDefault();
    addWorkoutGoal({
        name: nameRef.current.value,
        sets: setsRef.current.value,
        weight: weightRef.current.value
        
    })
    handleClose();
    }

    return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>New Goal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group controlId='name'>
                <Form.Label>Workout Name</Form.Label>
                <Form.Control ref={nameRef} type='text'required/>
            </Form.Group>
            <Form.Group controlId='sets'>
                <Form.Label>Number of Sets</Form.Label>
                <Form.Control ref={setsRef} min={1} type='number' required/>
            </Form.Group>
            <Form.Group controlId='weight'>
                <Form.Label>Weight</Form.Label>
                <Form.Control ref={weightRef} min={5} type='number'required/>
            </Form.Group>
            <div className='d-flex'>
                <Button className='my-3 mx-auto' type='submit' onClick={handleSubmit}>Submit</Button>
            </div>
            
        </Form>
        </Modal.Body>
    </Modal>
  )
}
