import { useState } from "react"
import "../styles/Todolist.css"
import Element from "./Element"

function Todolist() {

    const [task, setTask] = useState()

    function addTask() {

        const taskName = prompt("Que devez-vous faire ?")

        if (taskName) {
            setTask(taskName)
        }
    }

    function toggleElement() {

    }

    return (
        <section>
            <h2>To-do-list :</h2>
            <button onClick={addTask}>Ajouter une tâche ✅</button>
            <ul className="todo__ul">
                {task && <li onClick={toggleElement}>{ task && <Element value="false" />} {task}</li>}
            </ul>
        </section>
    )
}

export default Todolist