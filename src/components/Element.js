import "../styles/Element.css"

function Element(props) {

    const toggleElement = () =>  props.onClick()

    return (
        <p onClick={toggleElement}>{(props.isDone ? <span>✅ </span> : <span>✖️ </span>)}{props.text}</p>
    )
}

export default Element