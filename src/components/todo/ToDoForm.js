import React from "react";
import styled from "styled-components";

const ToDoFormContainer = styled.form`
  width: 100%;
  position: relative;
  display: flex;
  flex-flow: row nowrap;
`

const ToDoInput = styled.input`
  flex: 0 1 auto;
  display: flex;
  min-width: 0;
  width: 100%;
  margin: 0;
  min-height: 2rem;
`

const ToDoSubmit = styled.input`
  background: red;
  min-width: 0;
  height: 100%;
  display: flex;
  margin: 0;
`

class ToDoForm extends React.Component {
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
		// ReactDOM.findDOMNode(this.refs.item).focus();
		// return;
	};

	onChange = (e) => {
		this.setState({
			item: e.target.value,
		});
	};

	render() {
		return (
				<ToDoFormContainer onSubmit={this.handleSubmit}>
					<ToDoInput
						type="text"
						className="todoField form-control"
						ref="item"
						onChange={this.onChange}
						value={this.state.item}
					/>
					<ToDoSubmit
						type="submit"
						className="btn btn-default"
						value="Add"
					/>
				</ToDoFormContainer>
		);
	}
}

export default ToDoForm;
