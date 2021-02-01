import React from "react"
import "./todoSearch.scss"

const TodoSearch = () => {
    const htmlFor = Math.random().toFixed(3)

    return (
        <div className="TodoSearch">
            <div className="">
                <label htmlFor={ htmlFor }>Search your todos</label>
                <input id={htmlFor} type="text"/>
            </div>
            <button className={"btn btn-primary"} type={'button'}>Search</button>
        </div>
    )
}

export default TodoSearch