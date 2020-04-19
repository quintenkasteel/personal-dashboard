import React from "react";
import styled from "styled-components";

const ToDoCatelogFormContainer = styled.form`
	display: flex;
  flex-flow: row;
  padding: 0.5rem 0.5rem 0.5rem 1rem;
`;

const ToDoCatelogFormInput = styled.input`
	border: 0;
	outline: 0;
  background: transparent;
  min-width: 0;
  width: 100%;
  display: flex;

	&:focus {
		outline: 0;
  }
  &::placeholder {
    font-weight: bold;
  }
`;

const ToDoCatelogFormSubmit = styled.input`
  border: 0;
  padding: 0 0.3rem;
  margin: 0;
	background: transparent;
	color: black;
  font-weight: bold;
  cursor: pointer;

  &:focus {
    outline: 0;
  }
`;

class ToDoCatelogForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			item: "",
		};
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.onFormSubmit(this.state.item);
		this.setState({ item: "" });
	};

	onChange = (e) => {
		this.setState({
			item: e.target.value,
		});
	};

	render() {
		return (
			<>
				<ToDoCatelogFormContainer onSubmit={this.handleSubmit}>
					<ToDoCatelogFormInput
						type="text"
						className="newTodoCatalogField form-control"
						placeholder="Add New list"
						onChange={this.onChange}
						value={this.state.item}
					/>
					<ToDoCatelogFormSubmit
						type="submit"
						className="btn btn-default"
						value="+"
					/>
				</ToDoCatelogFormContainer>
			</>
		);
	}
}

export default ToDoCatelogForm;
