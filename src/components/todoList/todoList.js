import React from "react"
import TodoListItem from "../todoListItem/todoListItem";
import "./todoList.scss"

const TodoList = props => {
    const todos = props.todos

    return (
        <ul className={"todo__list"}>
            { todos.map((item, index) => {
                return (
                    <TodoListItem
                        index={ index }
                        key={ item.label+item.id }
                        item={ item }
                        setImportantHandler={ props.setImportantHandler }
                    />
                )
            }) }
        </ul>
    )
}
export default TodoList