import React, { Component } from "react";
import "./todoAddItem.scss"

class TodoAddItem extends Component {

    state = {
        label: ''
    }

    onChange = (e) => {
       this.setState ({
           label: e.target.value
       })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodosHandler(this.state.label)
        e.target.reset();
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} className={"todo__action--add"}>
                <input onChange={this.onChange} type="text"/>
                <button
                    className={'btn btn-success'}
                    type={"submit"}>
                    Create task
                </button>
            </form>
        )
    }
}
export default TodoAddItem