import React from "react";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";
import ToDoCatalogForm from "./ToDoCatelogForm"
import ToDoCatelog from "./ToDoCatelog"

class ToDo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			Todo: [
				{
					name: "primary",
					items: [
						{ itemText: "Todo itmd #1", checked: false },
						{ itemText: "Todo itmd #2", checked: true },
						{ itemText: "aaaa", checked: true },
						{ itemText: "dddd", checked: true },
					],
				},
				{
					name: "Secondary",
					items: [
						{ itemText: "Todo itmd #1", checked: false },
						{ itemText: "Todo itmd #2", checked: true },
						{ itemText: "Todo itmd #3", checked: true },
					],
				},
			],
			selectedCatelog: "0",
		};
	}

	AddCatelog = (newCatalog) => {
		var Catalog = {
			name: newCatalog,
			items: [{ item: "Todo itmd #1", isDone: false }],
		};
		var newtodo = this.state.Todo.concat([Catalog]);
		this.setState({
			Todo: newtodo,
		});
	};

	setSelectedCatalog = (index) => {
		this.state.selectedCatelog = index;
		this.setState({
			selectedCatelog: index,
		});
	};

	createItem = (newItem) => {
		var item = { itemText: newItem, checked: false };
		var newtodo = this.state.Todo;

		var allItems = this.state.Todo[this.state.selectedCatelog].items.concat([
			item,
		]);
		newtodo[this.state.selectedCatelog].items = allItems;
		this.setState({
			Todo: newtodo,
		});
	};

	deleteItem = (index) => {
		var newtodo = this.state.Todo;
		var allItems = this.state.Todo[this.state.selectedCatelog].items.slice(); //copy array
		allItems.splice(index, 1); //remove element
		newtodo[this.state.selectedCatelog].items = allItems;
		this.setState({
			Todo: newtodo,
		});
	};

	checkItem = (index) => {
		var newData = this.state.items; //copy array

		this.setState({
			items: newData,
		});
	};

	render() {
		return (
			<div>
				<h3>TODO....react.js</h3>
				<div className="col-xs-3">
					<ToDoCatalogForm onFormSubmit={this.AddCatelog} />
					<ToDoCatelog
						selectedID={this.state.selectedCatelog}
						onSelected={this.setSelectedCatalog}
						Todos={this.state.Todo}
					/>
				</div>
				<ToDoForm onFormSubmit={this.createItem} />
				<ToDoList
					items={this.state.Todo[this.state.selectedCatelog].items}
					onDelete={this.deleteItem}
					onCheck={this.checkItem}
				/>
			</div>
		);
	}
}

export default ToDo;
