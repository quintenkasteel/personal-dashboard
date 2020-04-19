import React from "react";

class CreateToDo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: "",
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleNewTodoAddition = this.handleNewTodoAddition.bind(this);
	}

	handleChange(event) {
		this.setState({
			value: event.target.value,
		});
	}

	handleNewTodoAddition() {
		if (this.input.value !== "") {
			this.props.addTodo(this.input.value);
			this.setState({
				value: "",
			});
			this.input.placeholder = "Add todo here...";
		}
	}

	render() {
		return (
			// ref should be passed a callback
			// with underlying dom element as its
			// argument to get its reference
			<div id="form">
				<input
					ref={(node) => {
						this.input = node;
					}}
					value={this.state.value}
					placeholder="Add todos here..."
					autoComplete="off"
					onChange={this.handleChange}
				/>

				<button onClick={this.handleNewTodoAddition}>+</button>
			</div>
		);
	}
}

export default CreateToDo