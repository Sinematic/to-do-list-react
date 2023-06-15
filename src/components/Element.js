function Element() {

    const [toDo, setTodo] = false

    function toggleState() {
        toDo === true ? setTodo(false) : setTodo(true) 
    }

    return (
        <p onClick={toggleState}>{(toDo  && <span>✅</span>)(!toDo && <span>✖️</span>)}</p>
    )
}

export default Element