import React from "react";

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
				<div className="row">
					<form onSubmit={this.handleSubmit}>
						<div className="form-group ">
							<input
								type="text"
								className="newTodoCatalogField form-control"
								onChange={this.onChange}
								value={this.state.item}
							/>
							<input
								type="submit"
								className="btn btn-default"
								style={{ float: "left", marginLeft: "5px" }}
								value="Add"
							/>
						</div>
					</form>
				</div>
			</>
		);
	}
}

export default ToDoCatelogForm;
