import React from "react";
import ToDoItem from "./ToDoItem";

class ToDoList extends React.Component {
	// constructor(props) {
	// 	super(props);

	// }

	Remove = (e) => {
		this.props.onDelete(e);
  };

  Check = (e) => {
		this.props.onCheck(e);
	};

	render() {
		var createItem = (item, i) => {
			return (
				<ToDoItem
					key={i}
					value={i}
					onRemove={this.Remove}
					isChecked={this.Check}
				>
					{item.itemText}
				</ToDoItem>
			);
		};
		return <ul>{this.props.items.map(createItem, this)}</ul>;
	}
}

export default ToDoList;
