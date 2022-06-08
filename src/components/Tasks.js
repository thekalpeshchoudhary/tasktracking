import Task from "./Task"
import React from 'react'

const Tasks = ({ tasks, onDelete }) => {

    return (
        <>
        {tasks.map((task) => (
                <Task key={task.id} onDelete={onDelete} task={task}/>
            ))}
        </>
    )
}

export default Tasks