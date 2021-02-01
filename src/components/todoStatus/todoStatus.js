import React from "react"
import "./todoStatus.scss"

//Line 8: todo if task completed is not one - type word todos instead todo

const TodoStatus = () => {
    return (
        <div className={"TodoStatus"}>
            Completed <b>1</b> of <b>3</b>
        </div>
    )
}

export default TodoStatus