import React from "react";

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
		if (i == this.props.selectedID) {
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
				<div className="list-group">
					{allitems.map((item, i) => {
						var _class = "";
						if (i == this.props.selectedID) {
							_class = "list-group-item active";
						} else {
							_class = "list-group-item ";
            }
            
						return (
							<a
								href="#"
								key={i}
								data-id={i}
								className={_class}
								onClick={this.changeTodo}
							>
								<span className="badge">{item.items.length}</span>
								{item.name}
							</a>
						);
					}, this)}
				</div>
			</>
		);
	}
}

export default ToDoCatelog;
