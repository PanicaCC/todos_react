import React from "react"
import "./todoStatus.scss"

const TodoStatus = props => {
    return (
        <div className={"TodoStatus"}>
            {
                props.todos !== props.doneCount
                ? <p className={'mb-1 mt-1'}>
                        Completed <b>{props.doneCount}</b> of <b>{props.todos}</b>
                   </p>
                :  <p className={'mb-1 mt-1 text-success'}>
                        <strong>All todos is complete</strong>
                    </p>
            }
        </div>
    )
}

export default TodoStatus