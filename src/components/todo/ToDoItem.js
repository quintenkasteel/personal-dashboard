import React from "react";

class ToDoItem extends React.Component {
	// constructor(props) {
	// 	super(props);
	state = {
		checked: false,
	};
	// }

	changeHandler = (e) => {
		this.setState({
			checked: e.target.checked,
		});
		this.props.isChecked(this.state.checked);
	};

	RemoveHandler = () => {
		this.props.onRemove(this.props.value);
	};

	render() {
		const { value, isChecked, children } = this.props;

		return (
			<>
				<li data-id={value} key={value}>
					<input
						type="checkbox"
						onChange={this.changeHandler}
						defaultChecked={isChecked}
					/>
					<span>{children}</span>
					<button
						type="button"
						className="close pull-right"
						aria-hidden="true"
						onClick={this.RemoveHandler}
					>
						X
					</button>
				</li>
			</>
		);
	}
}

export default ToDoItem;
