import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function UpdateTaskModal({ modal, toggle, taskObj ,updateTask }) {

    const [taskTitle, settaskTitle] = useState('');
    const [description, setDescription] = useState('');

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

    const handleUpdate = (e) => {
        e.preventDefault();
        const updateTaskObj = {
            id: taskObj.id,
            title: taskTitle,
            description: description
        };
        updateTask(updateTaskObj);
        settaskTitle("");
        setDescription("");
    }

    useEffect(() => {
        settaskTitle(taskObj.title);
        setDescription(taskObj.description);
    }, []);

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle} backdrop="static">
                <ModalHeader toggle={toggle}>Update Task</ModalHeader>
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
                    <Button color="primary" onClick={handleUpdate}>
                        Update
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default UpdateTaskModal