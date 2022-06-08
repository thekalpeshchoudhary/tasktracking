import './App.css'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState, React } from "react"

function App() {

    const [showAddTask, setAddForm] = useState(false)
    const [tasks, setTasks]= useState([
        {
            id: 1,
            text: 'New Task 1',
            day: 'Feb 5th at 2:30pm',
            reminder: true,
        },
        {
            id: 2,
            text: 'New Task 2',
            day: 'Feb 5th at 2:30pm',
            reminder: true,
        },
        {
            id: 3,
            text: 'New Task 3',
            day: 'Feb 5th at 2:30pm',
            reminder: true,
        },
        {
            id: 4,
            text: 'New Task 4',
            day: 'Feb 5th at 2:30pm',
            reminder: true,
        },
    ])

    // Add a task
    const addTask = (task) => {
        const id = Math.floor(Math.random()*10000) + 1
        const newTask = { id, ...task }
        setTasks([...tasks,newTask])
    }

    // Delete a Task
    const delTask = (id) => {
        setTasks(
            tasks.filter((task) => 
                task.id !== id 
            )
        )
    }

    // Toggle reminder
    const togTaskRem = (id) => {
        setTasks(
            tasks.map((task) => 
                task.id === id ? { ...task, reminder: !task.reminder } : task
            )
        )
    }

    return (
      <div className='container'>
        <Header formState={showAddTask} onAddClk={()=> setAddForm(!showAddTask)} title='Task Tracker'></Header>
        {showAddTask && <AddTask onAdd={addTask}></AddTask>}
        {tasks.length > 0 ? <Tasks onDelete={delTask} onToggle={togTaskRem} tasks={tasks}/> : 'No Tasks Added'}
      </div>
    );
}

export default App