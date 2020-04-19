import React from "react";
import styled from 'styled-components';

import ToDoList from './ToDoList';
import CreateToDo from './CreateToDo';

class ToDo extends React.Component {
	constructor(props) {
		super(props);
		// data for introduction to app
		// for new users
		const introData = [
			{
				id: -1,
				value: "Add you're first to do!",
			},
		];

		const localData = localStorage.todos && JSON.parse(localStorage.todos);

		this.state = {
			data: localData || introData,
		};

		// binding methods
		this.addTodo = this.addTodo.bind(this);
		this.removeTodo = this.removeTodo.bind(this);
	}
	// Handler to update localStorage
	updateLocalStorage() {
		if (typeof Storage !== "undefined")
			localStorage.todos = JSON.stringify(this.state.data);
	}
	// Handler to add todo
	addTodo(val) {
		let id;
		// if localStorage is available then increase localStorage count
		// else use global window object's id variable
		if (typeof Storage !== "undefined") {
			id = Number(localStorage.count);
			localStorage.count = Number(localStorage.count) + 1;
		} else {
			id = window.id++;
		}

		const todo = {
			value: val,
			id: id,
		};

		this.state.data.push(todo);
		// update state
		this.setState(
			{
				data: this.state.data,
			},
			() => {
				// update localStorage
				this.updateLocalStorage();
			}
		);
	}
	// Handler to remove todo
	removeTodo(id) {
		// filter out the todo that has to be removed
		const list = this.state.data.filter((todo) => {
			if (todo.id !== id) return todo;
		});
		// update state
		this.setState(
			{
				data: list,
			},
			() => {
				// update localStorage
				this.updateLocalStorage();
			}
		);
	}

	componentDidMount() {
		localStorage.clear();
		if (typeof Storage !== "undefined") {
			if (!localStorage.todos) {
				localStorage.todos = JSON.stringify(this.state.data);
			}
			if (!localStorage.count) {
				localStorage.count = 0;
			}
		} else {
			console.log(
				"%cApp will not remember todos created as LocalStorage Is Not Available",
				"color: hotpink; background: #333; font-size: x-large;font-family: Courier;"
			);
			window.id = 0;
		}
	}

	render() {
		return (
			<div id="container">
				<CreateToDo addTodo={this.addTodo} />
				<ToDoList todos={this.state.data} remove={this.removeTodo} />
			</div>
		);
	}
}

export default ToDo;
