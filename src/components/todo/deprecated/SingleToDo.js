import React, { useState } from "react";
import styled from "styled-components";
import EditableText from "../EditableText";

const TodoContainer = styled.div`
	display: flex;
	flex-flow: row nowrap;
	width: 100%;
	justify-content: space-between;
`;
const TodoText = styled.p`
	white-space: pre-wrap;
	font-size: 16px;
`;

const RemoveTodo = styled.span`
	font-size: 18px;
	font-weight: bold;
`;

class SingleToDo extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			task: ""
		};
  }
  

	render() {
		const { task, setTask } = this.state;
		const { todo, remove} = this.props;
		return (
			<div className="todos">
				<EditableText
					text={todo.value}
					placeholder="Write a task name"
					type="input"
				/>
				<span
					className="removeBtn"
					onClick={() => {
						remove(todo.id);
					}}
				>
					x
				</span>
			</div>
		);
	}
}

export default SingleToDo;
