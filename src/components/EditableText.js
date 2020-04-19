import React from "react";

class EditableText extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isEditing: false,
			value: props.text,
		};
	}

  handleKeyDown(event) {
    if (event.which === 13) {
      this.setState({ isEditing: false})
    }
  }

	setEditing = (newState) => {
		this.setState({
			isEditing: newState,
		});
	};

  changeValue(event) {
    const value = event.target.value
    this.setState({ value, error: "" })
  }

	render() {
		const { isEditing, value } = this.state;
		const { placeholder, text, type, props } = this.props;

		return (
			<div {...props}>
				{isEditing ? (
					<div
						onBlur={() => this.setEditing(false)}
					>
						<input
							type={type || "text"}
							value={this.props.value && !value ? this.props.value : value}
							placeholder={this.props.value || "placeholder"}
							onChange={this.changeValue.bind(this)}
							onKeyPress={this.handleKeyDown.bind(this)}
						/>
					</div>
				) : (
					<div onClick={() => this.setEditing(true)}>
						<span>{text || placeholder || "Editable content"}</span>
					</div>
				)}
			</div>
		);
	}
}

export default EditableText;
