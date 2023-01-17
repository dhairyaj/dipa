import React, { useState } from 'react';
import CreateTaskModal from './CreateTaskModal';
import { CreateTask, Header } from './StyledComponents';

function TaskList() {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const [taskList, setTaskList] = useState([]);

    const saveTask = (task) => {
        setTaskList([...taskList, task]);
        setModal(false);
    };

    return (
        <>
            <Header>
                <h2>Digital Personal Assistant (DiPA)</h2>
                <CreateTask onClick={() => setModal(true)}>Create Task</CreateTask>
            </Header>
            <div>
                {taskList.map((task, index) => 
                    <div key={index}>
                        <p>{task.title}</p>
                        <p>{task.description}</p>
                    </div>
                )}
            </div>
            <CreateTaskModal modal={modal} toggle={toggle} saveTask={saveTask} />
        </>
    )
}

export default TaskList