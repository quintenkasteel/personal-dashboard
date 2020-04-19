import React from "react";
import styled from "styled-components";

const ToDoItemContainer = styled.li`
	display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
`;

const ToDoCheckboxContainer = styled.label`
	display: flex;
  flex-flow: row;
  cursor: pointer;
`;

const ToDoCheckboxInput = styled.div`
	visibility: hidden;
`;

const ToDoCheckBoxLabel = styled.span`
  font-size: 16px;
`;
const ToDoRemove = styled.button`
	width: 1rem;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  color: white;
  padding: 0;
  font-weight: 900;
  border: 0;
  cursor: pointer;
`;

class ToDoItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			checked: false,
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange = () => {
		this.setState({
			checked: !this.state.checked,
		});
		this.props.isChecked(this.state.checked);
	};

	RemoveHandler = () => {
		this.props.onRemove(this.props.value);
	};

	render() {
		const { value, isChecked, children } = this.props;

		const ToDoCheckbox = styled.div`
			width: 1rem;
			height: 1rem;
			border: 2px solid white;
      border-radius: 2px;
      margin-right: 0.3rem;

			&.checked {
				background: white;
			}
		`;

		return (
			<>
				<ToDoItemContainer data-id={value} key={value}>
					<ToDoCheckboxContainer>
						<ToDoCheckbox className={this.state.checked ? "checked" : ""} />
						<ToDoCheckboxInput
							type="checkbox"
							onChange={() => this.handleChange()}
							defaultChecked={isChecked}
						/>
						<ToDoCheckBoxLabel>{children}</ToDoCheckBoxLabel>
					</ToDoCheckboxContainer>
					<ToDoRemove
						type="button"
						className="close pull-right"
						aria-hidden="true"
						onClick={this.RemoveHandler}>
						X
					</ToDoRemove>
				</ToDoItemContainer>
			</>
		);
	}
}

export default ToDoItem;
