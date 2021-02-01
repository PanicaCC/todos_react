import React, {Component} from "react"
import TodoStatus from "./components/todoStatus/todoStatus";
import TodoSearch from "./components/todoSearch/todoSearch";
import TodoList from "./components/todoList/todoList";
import "./App.scss"
import TodoAddItem from "./components/todoAddItem/todoAddItem";

class App extends Component {

    state = {
        data: [
            { id: 1, label: 'Todo 1', important: false, done: false },
            { id: 2, label: 'Todo 2', important: false, done: false },
            { id: 3, label: 'Todo 3', important: false, done: false }
        ]
    }

    setImportantHandler = id => {
        const updateImportantData = [...this.state.data]
        const targetElement = updateImportantData.findIndex((el) => el.id === id)

        updateImportantData[targetElement].important = !this.state.data[targetElement].important

        this.setState({
            data: updateImportantData
        })
    }

    completeTodosHandler = id => {
        const updateImportantData = [...this.state.data]
        const targetElement = updateImportantData.findIndex((el) => el.id === id)

        updateImportantData[targetElement].done = !this.state.data[targetElement].done

        this.setState({
            data: updateImportantData
        })
    }

    deleteTodosHandler = id => {
        const updateImportantData = [...this.state.data]
        const targetElement = updateImportantData.findIndex((el) => el.id === id)

        updateImportantData.splice(targetElement, 1)

        this.setState({
            data: updateImportantData
        })
    }

    addTodosHandler = () => {
        const updateImportantData = [...this.state.data]
        const maxIdElement = updateImportantData.reduce((acc, curr) => acc.b > curr.b ? acc : curr);
        const newItem = { id: maxIdElement.id + 1, label: 'Todo new', important: false, done: false }

        updateImportantData.push(newItem)
        this.setState({
            data: updateImportantData
        })
    }

    render(){
        const title = 'My todo list!'
        const data = this.state.data




        return (
            <div className={"todo"}>
                <h1>{ title }</h1>
                <TodoStatus />
                <TodoSearch />
                <TodoList
                    todos = { data }
                    setImportantHandler = { this.setImportantHandler }
                    completeTodosHandler = { this.completeTodosHandler }
                    deleteTodosHandler={ this.deleteTodosHandler }
                />
                <TodoAddItem
                    addTodosHandler={this.addTodosHandler}
                />
            </div>
        )
    }
}
export default App