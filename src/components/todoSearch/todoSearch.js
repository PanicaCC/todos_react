import React from "react"
import "./todoSearch.scss"

const TodoSearch = props => {
    const htmlFor = Math.random().toFixed(3)

    return (
        <div className="TodoSearch">
            <div className="">
                <label htmlFor={ htmlFor }>Search your todos</label>
                <input onChange={props.searchHandler} id={htmlFor} type="text"/>
            </div>
        </div>
    )
}

export default TodoSearch