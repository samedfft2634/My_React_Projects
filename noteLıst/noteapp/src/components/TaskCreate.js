import { useState } from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

function TaskCreate({ onCreate, task, taskFormUpdate, onUpdate}) {
	// Handle Title
	const [title, setTitle] = useState(task ? task.title : '');
	const handleTitleChange = (event) => {
		setTitle(event.target.value);
	};

	//  Handle Text Area
	const [area, setArea] = useState(task ? task.area : '');
	const handleAreaChange = (event) => {
		setArea(event.target.value);
	};

	// handleSubmit
	const handleSubmit = (event) => {
		event.preventDefault();
		if (title.trim() === "" || area.trim() === "") {
			MySwal.fire({
				position: "top",
				icon: "warning",
				title: "Please add a Task!",
				showConfirmButton: false,
				timer: 1500
			  });
			return;
		}
        if(taskFormUpdate){
            onUpdate(task.id,title,area)
        } else {
            onCreate(title, area);
        }
		
		setTitle("");
		setArea("");
	};
	return (
		<div>
			{taskFormUpdate ? (
				<div className="task-update">
					<h3>Edit your Task!</h3>
					<form className="task-form">
						<label className="task-label">Edit Title!</label>
						<input
							value={title}
							onChange={handleTitleChange}
							className="task-input"
						/>
						<label className="task-label">Edit Task!</label>
						<textarea
							value={area}
							className="task-input"
							onChange={handleAreaChange}
							rows={5}
						/>
						<button className="createBtn update-button" onClick={handleSubmit}>
							Update{" "}
						</button>
					</form>
				</div>
			) : (
				<div className="task-create">
					<h3>Please add Task!</h3>
					<form className="task-form">
						<label className="task-label">Title</label>
						<input
							value={title}
							onChange={handleTitleChange}
							className="task-input"
						/>
						<label className="task-label">Add Task!</label>
						<textarea
							value={area}
							className="task-input"
							onChange={handleAreaChange}
							rows={5}
							
						/>
						<button className="createBtn" onClick={handleSubmit}>
							Create
						</button>
					</form>
				</div>
			)}
		</div>
	);
}

export default TaskCreate;
