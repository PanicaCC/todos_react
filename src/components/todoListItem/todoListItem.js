import React from "react";
import "./todoListItem.scss"

const TodoListItem = props => {
    const {label, important, id, done} = props.item
    const classes = ["todo__list--item"]

        if(important){
            classes.push('important')
        }

        if(done){
            classes.push('done')
        }

    return (
        <li
            className={classes.join(' ')}
        >
            <p
                onClick={() => props.completeTodosHandler(id) }
            >
                <span>{ props.index+1 +'. ' }</span>
                { label }
            </p>
            <button
                onClick={() => props.deleteTodosHandler(id)}
                className={"todo__action--delete"}
            >
                <i className={"fa fa-trash"}>{''}</i>
            </button>
            <button
                className={"todo__action--mark"}
                onClick={() => props.setImportantHandler(id)}
            >
                <i className="fa fa-exclamation">{''}</i>
            </button>
        </li>
    )
};
export default TodoListItem

