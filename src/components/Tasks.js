import Task from "./Task"
import React from 'react'

const Tasks = ({ tasks }) => {

    return (
        <>
        {tasks.map((task) => (
                <Task key={task.id} task={task}/>
            ))}
        </>
    )
}

export default Tasks