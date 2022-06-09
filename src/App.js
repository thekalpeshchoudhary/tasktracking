import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import About from './components/About'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState, React, useEffect } from "react"

function App() {

    const [showAddTask, setAddForm] = useState(false)
    const [tasks, setTasks]= useState([])
    useEffect(() =>{
        const getTasks = async () => {
            const tasksFromServer = await fetchTasks()
            setTasks(tasksFromServer)
        }
        getTasks()
    }, [])

    // Fetch Tasks
    const fetchTasks = async () => {
        const res = await fetch('http://localhost:5000/tasks')
        const data = await res.json()
        return data
    }

    // Fetch Task
    const fetchTask = async (id) => {
        const res = await fetch(`http://localhost:5000/tasks/${id}`)
        const data = await res.json()
        return data
    }

    // Add a task
    const addTask = async (task) => {
        // const id = Math.floor(Math.random()*10000) + 1
        // const newTask = { id, ...task }
        
        const res = await fetch(`http://localhost:5000/tasks`,{
            method:'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body:JSON.stringify(task)
        })
        const data= await res.json()
        setTasks([...tasks, data])
    }

    // Delete a Task
    const delTask = async (id) => {
        await fetch(`http://localhost:5000/tasks/${id}`, {method: 'DELETE'})
        
        setTasks(
            tasks.filter((task) => 
                task.id !== id 
            )
        )
    }

    // Toggle reminder
    const togTaskRem = async (id) => {
        const taskToToggle = await fetchTask(id)
        const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}

        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(updTask)
        })

        const data = await res.json()

        setTasks(
            tasks.map((task) => 
                task.id === id ? { ...task, reminder: data.reminder } : task
            )
        )
    }

    return (
        <Router>
            <div className='container'>
                <Header formState={showAddTask} onAddClk={()=> setAddForm(!showAddTask)} title='Task Tracker'></Header>
                {showAddTask && <AddTask onAdd={addTask}></AddTask>}
                <Routes>
                    <Route path='/' element={
                        <>
                            {tasks.length > 0 ? <Tasks onDelete={delTask} onToggle={togTaskRem} tasks={tasks}/> : 'No Tasks Added'}
                        </>
                    } />
                    <Route path='/about' element={<About/>} />
                </Routes>
                <Footer/>
            </div>
        </Router>
    );
}

export default App