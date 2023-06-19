import { useState } from "react"
import "../styles/Todolist.css"
import Element from "./Element"

function Todolist() {

    const [tasks, setTasks] = useState([])

    const addTask = () => {

        const taskName = prompt("Que devez-vous faire ?")

        if (taskName) {

            const task = {
                "isDone" : false,
                "text" : taskName
            }
            
            setTasks([...tasks, task])
        }
    }

    const deleteTask = () => {

        const updatedTasks = tasks.filter(task => !task.isDone)
        console.log(updatedTasks)
        setTasks(updatedTasks)
    }
    
    const toggleElement = (index) => {

        const updatedTasks = [...tasks]
        updatedTasks[index].isDone = !updatedTasks[index].isDone
        setTasks(updatedTasks)
    }          

    return (
        <section>
            <h2>To-do-list :</h2>
            <button onClick={addTask}>Ajouter une tâche ✅</button>
            {tasks.length ? <button onClick={deleteTask} >Supprimer les tâches effectuées</button> : null}
            {tasks.length ? <ul className="todo__ul">
                {tasks.map((task, index) => 
                    <Element key={task.text} isDone={task.isDone} text={task.text} onClick={() => toggleElement(index)} />
                )}
            </ul> : null}
        </section>
    )
}

export default Todolist