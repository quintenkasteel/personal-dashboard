import React from "react";
import styled from "styled-components";

const ToDoCatelogContainer = styled.div`
	width: 100%;
	display: flex;
	flex-flow: column;
	padding-bottom: 0;
	height: auto;
	overflow-y: auto;
`;

const ToDoCatelogItem = styled.div`
	padding: 0.5rem 0.5rem 0.5rem 1rem;
	position: relative;
	height: 100%;
	display: flex;
	flex-flow: row;
	align-items: center;
	justify-content: space-between;
	cursor: pointer;

	&:hover,
	&:focus,
	&:active {
    span {
      color: #585858;
    }
		
		.catelog-item-counter {
      background: #585858;
      color: white;
		}
	}
`;

const ToDoCatelogItemText = styled.span`
	color: black;
	font-size: 0.8rem;
`;

const ToDoCatelogCounter = styled.span`
	background: black;
	color: white;
	padding: 0.3rem 0.45rem;
	border-radius: 50px;
	font-size: 0.6rem;
`;

class ToDoCatelog extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			item: "",
		};
	}

	changeTodo = (e) => {
		this.props.onSelected(e.currentTarget.dataset.id);
	};

	checkActive = (i) => {
		if (i === this.props.selectedID) {
			return "list-group-item active";
		} else {
			return "list-group-item ";
		}
	};

	render() {
		var selectedID = this.props.selectedID;
		var allitems = this.props.Todos;

		return (
			<>
				<ToDoCatelogContainer>
					{allitems.map((item, i) => {
						var _class = "";
						if (i === selectedID) {
							_class = "list-group-item active";
						} else {
							_class = "list-group-item ";
						}

						return (
							<ToDoCatelogItem
								key={i}
								data-id={i}
								className={_class}
								onClick={this.changeTodo}>
								<ToDoCatelogItemText>{item.name}</ToDoCatelogItemText>
								<ToDoCatelogCounter className="catelog-item-counter">
									{item.items.length}
								</ToDoCatelogCounter>
							</ToDoCatelogItem>
						);
					}, this)}
				</ToDoCatelogContainer>
			</>
		);
	}
}

export default ToDoCatelog;
