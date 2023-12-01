import TaskShow from "./TaskShow";


function TaskList({tasks,onDelete, onUpdate}) {
    return ( 
        <div className="task-list">
            {tasks.map((task,index)=>{
                return(
                    < TaskShow task={task} key={index} onDelete={onDelete} onUpdate={onUpdate}/>
                )
            })}
        </div>
     );
}

export default TaskList;