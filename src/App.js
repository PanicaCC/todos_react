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
        ],
        term: ''
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
        const updateDelData = [...this.state.data]
        const targetElement = updateDelData.findIndex((el) => el.id === id)

        updateDelData[targetElement].done = !this.state.data[targetElement].done
        this.setState({
            data: updateDelData
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

    addTodosHandler = (label) => {
        const updateImportantData = [...this.state.data]
        const maxIdElement = updateImportantData.reduce((acc, curr) => acc.b > curr.b ? acc : curr);
        const newItem = { id: maxIdElement.id + 1, label: label, important: false, done: false }

        updateImportantData.push(newItem)
        this.setState({
            data: updateImportantData
        })
    }

    searchHandler = (e) => {
        const val = e.target.value
        this.setState({
            term: val.toLowerCase()
        })
    }

    search = (items, term) => {
        if (items.length === 0){
            return items
        }
        return items.filter(item => item.label.toLowerCase().indexOf(term) > -1)
    }

    render(){
        const { data, term } = this.state
        const title = 'My todo list!'
        const visibleData = this.search( data, term )
        const todos = data.length
        const doneCount = Object.values(data).reduce((a, { done }) => a + done, 0)

        return (
            <div className={"todo"}>
                <h1>{ title }</h1>
                <TodoStatus todos={todos} doneCount={doneCount} />
                <TodoSearch searchHandler={ this.searchHandler } />
                {
                    Object.keys(visibleData).length !== 0
                    ? <TodoList
                            todos = { visibleData }
                            setImportantHandler = { this.setImportantHandler }
                            completeTodosHandler = { this.completeTodosHandler }
                            deleteTodosHandler={ this.deleteTodosHandler }
                        />
                    : <p className={'text-danger mt-2 mb-5'}>Todos is empty!</p>
                }
                <TodoAddItem
                    addTodosHandler={this.addTodosHandler}
                />
            </div>
        )
    }
}
export default App