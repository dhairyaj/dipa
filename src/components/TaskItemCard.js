import React, {useState} from 'react';
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import UpdateTaskModal from './UpdateTaskModal';

function TaskItemCard({ taskObj, deleteTask, updateListArray }) {

    // To toggle the modal state
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    // Function triggered to call the delete task functionality
    const handleDeleteTask = () => {
        deleteTask(taskObj.id);
    }

    // Function triggered to call the update task functionality
    const updateTask = (task) => {
        updateListArray(task);
        setModal(false);
    }

    return (
        <div className="card mx-2 mt-2" style={{ height: '18rem', width: '18rem', borderRadius: '2rem' }}>
            {/* <div className="card-header">
                Featured
            </div> */}
            <div className="card-body">
                <h5 className="card-title">{taskObj.title}</h5>
                <p className="card-text">{taskObj.description}</p>
            </div>
            <div className="card-footer text-end">
                <FaEdit className='mx-1' style={{cursor: 'pointer'}} onClick={() => setModal(true)} />
                <FaTrashAlt className='mx-1' style={{cursor: 'pointer'}} onClick={handleDeleteTask} />
            </div>
            <UpdateTaskModal modal={modal} toggle={toggle} taskObj={taskObj} updateTask={updateTask} />
        </div>
    )
}

export default TaskItemCard