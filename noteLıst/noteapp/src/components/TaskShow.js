import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit, faClipboard , faListCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import TaskCreate from "./TaskCreate";

function TaskShow({ task, onDelete, onUpdate }) {
	const [showEdit, setShowEdit] = useState(false);
	const handleDeleteClick = () => {
		onDelete(task.id);
	};
	const handleEditClick = () => {
		setShowEdit(!showEdit);
	};
	const handleSubmit = (id, updatedTitle, updatedArea) => {
		setShowEdit(false);
    	onUpdate(id, updatedTitle, updatedArea)
	};

	return (
		<div className="task-show">
			{showEdit ? (
				<TaskCreate task={task} taskFormUpdate={true} onUpdate={handleSubmit}/>
			) : (
				<div>
					<h3 className="task-title"><FontAwesomeIcon icon={faClipboard} style={{color:"blueviolet"}}/>Your Task  </h3>
					<p className="yourTask">{task.title}</p>
					<h3 className="task-title"><FontAwesomeIcon icon={faListCheck} style={{color:"green"}}/>To Do </h3>
					<p className="todo">{task.area}</p>
					<div className="task-btns">
						<button onClick={handleDeleteClick} className="delBtn">
							<FontAwesomeIcon icon={faTrash} />
						</button>
						<button onClick={handleEditClick} className="editBtn">
							<FontAwesomeIcon icon={faEdit} />
						</button>
					</div>
				</div>
			)}
		</div>
	);
}

export default TaskShow;
