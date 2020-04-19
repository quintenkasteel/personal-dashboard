import React, { Component } from "react";
import SingleToDo from "./SingleToDo";

const ToDoList = ({ todos, remove }) => {
	let allTodos = [];

	if (todos.length > 0) {
		allTodos = todos.map((todo, i) => {
			// passing todo and remove method reference
			return <SingleToDo key={i} todo={todo} remove={remove} />;
			//return (<p>{todo.value}</p>);
		});
	} else {
		allTodos.push(<h3 id="acu">All caught up !</h3>);
	}

	return (
		<div id="list">
			<p id="info"> Your Todos: </p>
			{allTodos}
		</div>
	);
};

export default ToDoList;
