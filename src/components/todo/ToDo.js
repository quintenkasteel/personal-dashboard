import React from "react";
import styled from "styled-components";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";
import ToDoCatalogForm from "./ToDoCatelogForm";
import ToDoCatelog from "./ToDoCatelog";

const ToDoContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-flow: column;
	color: white;
	border-radius: 5px;
	overflow: hidden;
	position: relative;

	&.sidebar-open {
		&:after {
			content: "";
			position: absolute;
			top: 0;
			left: 0%;
			width: 100%;
			height: 100%;
			background: #00000087;
			z-index: 0;
		}
	}
`;

const ToDoHeader = styled.div`
	width: 100%;
	position: relative;
	display: flex;
	flex-flow: row;
	justify-content: space-between;
	padding: 1rem;
	font-weight: bold;
	background: #00000069;
	margin-bottom: 1rem;

	span {
		transform: rotate(90deg);
	}
`;
const SideBar = styled.div`
	width: 70%;
	height: 100%;
	position: absolute;
	top: 0;
	left: -100%;
	display: none;
	background: white;
	color: black;
	flex-flow: column;
	z-index: 2;
	transition: left 0.4s;

	h3 {
		padding: 1rem 0.5rem;
	}

	.sidebar-open & {
		display: flex;
		left: 0;
	}
`;

const ToggleIcon = styled.span`
	position: relative;
	z-index: 3;
	font-weight: bold;
	cursor: pointer;
`;

class ToDo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sideMenuOpen: false,
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
			sideMenuOpen: false,
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

	handleSideBarOpen = () => {
		this.setState({
			sideMenuOpen: !this.state.sideMenuOpen,
		});
	};

	render() {
		const { sideMenuOpen } = this.state;
		return (
			<ToDoContainer className={sideMenuOpen ? "sidebar-open" : ""}>
				<ToDoHeader>
					<h3>{this.state.Todo[this.state.selectedCatelog].name}</h3>

					<ToggleIcon onClick={this.handleSideBarOpen}>
						{sideMenuOpen ? <>X</> : ">"}
					</ToggleIcon>
				</ToDoHeader>
				<SideBar className={sideMenuOpen ? "open" : ""}>
					<h3>Choose a list</h3>
					<ToDoCatelog
						selectedID={this.state.selectedCatelog}
						onSelected={this.setSelectedCatalog}
						Todos={this.state.Todo}
					/>
					<ToDoCatalogForm onFormSubmit={this.AddCatelog} />
				</SideBar>
				<ToDoList
					items={this.state.Todo[this.state.selectedCatelog].items}
					onDelete={this.deleteItem}
					onCheck={this.checkItem}
				/>
				<ToDoForm onFormSubmit={this.createItem} />
			</ToDoContainer>
		);
	}
}

export default ToDo;
