import React from "react";
import "./todoListItem.scss"

const TodoListItem = props => {
    const {label, important, id} = props.item
    const classes = ["todo__list--item"]

        if(important){
            classes.push('important')
        }

    return (
        <li
            onClick={() => props.setImportantHandler(id)}
            className={classes.join(' ')}
        >
            <p>
                <span>{ props.index+1 +'. ' }</span>
                { label }
            </p>
        </li>
    )
};
export default TodoListItem

