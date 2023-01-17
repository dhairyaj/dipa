import React from 'react';
import CreateTaskModal from './CreateTaskModal';
import { CreateTask, Header } from './StyledComponents';

function ToDoList() {
    return (
        <>
            <Header>
                <h2>Digital Personal Assistant (DiPA)</h2>
                <CreateTask>Create Task</CreateTask>
            </Header>
            <CreateTaskModal />
        </>
    )
}

export default ToDoList