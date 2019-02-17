import React, {Component} from 'react';
import './DogFrame.css';

class DogFrame extends Component {

	render() {

		return (

      <div className="frame">
        <h2> {this.props.name} </h2>
        <img src={this.props.image} alt="no pic available" width="150px"/>
        <h3> {"Shade: "} </h3>
        <h4> {this.props.shade} </h4>
        <h3> {"Size: "} </h3>
        <h4> {this.props.size} </h4>
        <h3> {"Loyalty: "} </h3>
        <h5 className={this.props.loyaltyClass} > {this.props.loyalty} </h5>
      </div>
		);
	}
}

export default DogFrame;
