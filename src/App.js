import './App.css'
import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState, React } from "react"

function App() {
    let name = 'Kalpesh'
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
    return (
      <div className='container'>
        <Header title='Task Tracker'></Header>
        <Tasks tasks={tasks}/>
      </div>
    );
}

export default App