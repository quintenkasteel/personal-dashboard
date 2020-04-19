import React from "react";
import ToDoItem from "./ToDoItem";
import styled from "styled-components";

const ToDoListContainer = styled.div`
	display: flex;
  flex-flow: column;
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;
	overflow-y: auto;
`;

const ToDoUnorderedList = styled.ul`
	display: flex;
	flex-flow: column;
	height: 100%;
`;

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
					isChecked={this.Check}>
					{item.itemText}
				</ToDoItem>
			);
		};
		return (
			<ToDoListContainer>
				<ToDoUnorderedList>
					{this.props.items.map(createItem, this)}
				</ToDoUnorderedList>
			</ToDoListContainer>
		);
	}
}

export default ToDoList;
