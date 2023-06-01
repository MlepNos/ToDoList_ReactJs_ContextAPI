import { useState } from 'react';
import TaskCreate from './TaskCreate';
import {useEffect,useContext } from 'react';
import TasksContext from '../Context/Tasks';

function TaskShow({ task}) {

   const {editTaskById,deleteTaskById } = useContext(TasksContext);
  const [showEdit, setShowEdit] = useState(false);
  const handleDeleteClick = () => {
    deleteTaskById(task.id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  const handleSubmit = (id, updatedTitle, updatedTaskDesc) => {
    setShowEdit(false);
    editTaskById(id, updatedTitle, updatedTaskDesc);
  };

  console.log(task);
  return (
    <div className="task-show">
      {showEdit ? (
        <TaskCreate task={task} taskformUpdate={true} onUpdate={handleSubmit}  />
      ) : (
        <div>
          <h3 className="task-title">Task</h3>
          <p>{task.title}</p>
          <h3 className="task-title">Description</h3>
          <p className="task-description">{task.taskDesc}</p>
          <div>
            <button className="task-delete" onClick={handleDeleteClick}>
              Delete
            </button>
            <button className="task-edit" onClick={handleEditClick}>
              Update
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskShow;
