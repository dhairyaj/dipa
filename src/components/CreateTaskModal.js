import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function CreateTaskModal({ modal, toggle, saveTask }) {
    
    // Maintain state to set the task title and description
    const [taskTitle, settaskTitle] = useState('');
    const [description, setDescription] = useState('');

    // Function to modify the value while typing
    const handleChange = (e) => {
        const { name, value } = e.target;

        if (value !== "" || value !== null) {
            if (name === "taskTitle") {
                settaskTitle(value);
            } else {
                setDescription(value);
            }
        }
    };

    // Function triggered to call the save task functionality
    const handleSaveTask = () => {
        const taskObj = {
            id: new Date().getTime().toString(),
            title: taskTitle,
            description: description
        };
        saveTask(taskObj);
        settaskTitle("");
        setDescription("");
    }

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle} backdrop="static">
                <ModalHeader toggle={toggle}>Create Task</ModalHeader>
                <ModalBody>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Task Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter Task Title" name="taskTitle" value={taskTitle} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={5} name="description" value={description} onChange={handleChange} />
                        </Form.Group>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleSaveTask}>
                        Create
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default CreateTaskModal