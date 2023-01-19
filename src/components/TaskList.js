import React, { useState, useEffect } from 'react';
import CreateTaskModal from './CreateTaskModal';
import { CreateTask, Header, TaskContainer } from './StyledComponents';
import TaskItemCard from './TaskItemCard';

function TaskList() {
    // To toggle the modal state
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    // To set the list of task
    const [taskList, setTaskList] = useState([]);

    // Load all the tasks from localstorage if any only on first load of page i.e. mounting
    useEffect(() => {
        if(localStorage.getItem("taskList")) {
            setTaskList(JSON.parse([localStorage.getItem("taskList")]));
        }
    }, []);

    // To add the task to the list
    const saveTask = (task) => {
        let tempTaskList = [...taskList, task];
        localStorage.setItem("taskList", JSON.stringify(tempTaskList));
        setTaskList(tempTaskList);
        setModal(false);
    };

    // To update the task which was edited
    const updateListArray = (task) => {
        let updatedList = taskList.map((current) => {
            if(current.id === task.id) {
                return {...current, title: task.title, description: task.description};
            }
            return current;
        })
        localStorage.setItem("taskList", JSON.stringify(updatedList));
        setTaskList(updatedList);
    }

    // To delete the task
    const deleteTask = (id) => {
        const newTaskList = taskList.filter(task => task.id !== id);
        localStorage.setItem("taskList", JSON.stringify(newTaskList));
        setTaskList(newTaskList);
    };

    return (
        <>
            <Header>
                <h2>Digital Personal Assistant (DiPA)</h2>
                <CreateTask onClick={() => setModal(true)}>Create Task</CreateTask>
            </Header>
            <TaskContainer>
                {taskList.map((task) => 
                    <TaskItemCard key={task.id} taskObj={task} deleteTask={deleteTask} updateListArray={updateListArray} />
                )}
            </TaskContainer>
            <CreateTaskModal modal={modal} toggle={toggle} saveTask={saveTask} />
        </>
    )
}

export default TaskList