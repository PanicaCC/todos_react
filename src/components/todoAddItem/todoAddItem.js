import React from "react";
import "./todoAddItem.scss"

const TodoAddItem = props => {
    return (
        <div className={"todo__action--add"}>
            {/*<input type="text"/>*/}
            <button
                onClick={() => props.addTodosHandler() }
                type={"button"}>
                Create task
            </button>
        </div>
    )
}
export default TodoAddItem