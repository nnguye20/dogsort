import React, { Component} from 'react';

class List extends Component {

	renderList() {

		const items = this.props.items.map(item => {
			return <span key={item.props.name}> {item} </span>
		});

		return items;
	}

	render() {

		return (
			<ul>
				{this.renderList()}
			</ul>
		);
	}
}

export default List;
