import React, {Component} from "react"
import TodoStatus from "./components/todoStatus/todoStatus";
import TodoSearch from "./components/todoSearch/todoSearch";
import TodoList from "./components/todoList/todoList";

import "./App.scss"

const todoData = [
    { id: 1, label: 'Todo 1', important: false, done: false },
    { id: 2, label: 'Todo 2', important: false, done: false },
    { id: 3, label: 'Todo 3', important: false, done: false }
]

class App extends Component {

    state = {
        data: todoData
    }

    render(){
        const title = 'My todo list!'
        const data = this.state.data

        this.setImportantHandler = id => {
            const updateImportantData = [...this.state.data]
            const targetElement = updateImportantData.findIndex((el) => el.id === id)

            console.log(targetElement)
            //todo finish set important
        }
        //todo create fun to delete item from Array

        return (
            <div className={"todo"}>
                <h1>{ title }</h1>
                <TodoStatus />
                <TodoSearch />
                <TodoList
                    todos = { data }
                    setImportantHandler = { this.setImportantHandler }
                />

            </div>
        )
    }
}
export default App