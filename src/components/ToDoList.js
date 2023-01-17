import React, { useState } from 'react';
import CreateTaskModal from './CreateTaskModal';
import { CreateTask, Header } from './StyledComponents';

function ToDoList() {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    return (
        <>
            <Header>
                <h2>Digital Personal Assistant (DiPA)</h2>
                <CreateTask onClick = {() => setModal(true)}>Create Task</CreateTask>
            </Header>
            <CreateTaskModal modal={modal} toggle={toggle}/>
        </>
    )
}

export default ToDoList