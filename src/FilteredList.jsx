import React, { Component} from 'react';
import {DropdownButton, MenuItem} from 'react-bootstrap';
import List from './List';
import { Button } from 'react-bootstrap';

class FilteredList extends Component {

	constructor(props) {
		super(props);

		this.state = {
			search:"",
			shade:"Shade: All",
      size:"Size: All",
      sort:"Sort By: Alphabetical"

		}

	}

	filterItem = (item) => {

		if ((this.state.shade === "Shade: All") && (this.state.size === "Size: All")) {
			return (item.props.name.toLowerCase().search(this.state.search) !== -1);
		} else if (this.state.shade === "Shade: All") {
      return ((item.props.name.toLowerCase().search(this.state.search) !== -1) && (this.state.size.toLowerCase().search(item.props.size.toLowerCase()) !== -1));
    } else if (this.state.size === "Size: All") {
      return ((item.props.name.toLowerCase().search(this.state.search) !== -1) && (this.state.shade.toLowerCase().search(item.props.shade.toLowerCase()) !== -1));
    }

		return ((item.props.name.toLowerCase().search(this.state.search) !== -1) && (this.state.shade.toLowerCase().search(item.props.shade.toLowerCase()) !== -1) &&
    (this.state.size.toLowerCase().search(item.props.size.toLowerCase()) !== -1));


	}

  onSearch = (event) => {

    this.setState({search: event.target.value.toLowerCase()});

  }

	onDropdown_shade = (eventKey, title) => {

		this.setState({shade: eventKey});

	}

  onDropdown_size = (eventKey) => {

		this.setState({size: eventKey});

	}

  onDropdown_sort = (eventKey) => {

    if (eventKey === "Sort By: Alphabetical"){
      this.props.items.sort(function(a, b){
        var nameA = a.props.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.props.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });

    } else if (eventKey === "Sort By: Loyalty - High to Low"){
      this.props.items.sort((a, b) => b.props.loyalty - a.props.loyalty);
    } else {
      this.props.items.sort((a, b) => a.props.loyalty - b.props.loyalty);
    }
    this.setState({sort: eventKey});


  }

  onReset = () => {

    this.setState({search:""});
    this.setState({shade:"Shade: All"});
    this.setState({size:"Size: All"});
    this.onDropdown_sort("Sort By: Alphabetical");


  }


	render() {

		return (
			<div className="filter-list">
				<h1> Dog Breeds</h1>
				<DropdownButton id="shadeDropdown" title={this.state.shade}>
					<MenuItem eventKey="Shade: All" onSelect={this.onDropdown_shade}>Shade: All</MenuItem>
					<MenuItem eventKey="Shade: Light" onSelect={this.onDropdown_shade}>Shade: Light</MenuItem>
					<MenuItem eventKey="Shade: Dark" onSelect={this.onDropdown_shade}>Shade: Dark</MenuItem>
          <MenuItem eventKey="Shade: Mixed" onSelect={this.onDropdown_shade}>Shade: Mixed</MenuItem>
          <MenuItem eventKey="Shade: Orange/Yellow" onSelect={this.onDropdown_shade}>Shade: Orange/Yellow</MenuItem>
				</DropdownButton>
        <DropdownButton id="sizeDropdown" title={this.state.size}>
					<MenuItem eventKey="Size: All" onSelect={this.onDropdown_size}>Size: All</MenuItem>
					<MenuItem eventKey="Size: Small" onSelect={this.onDropdown_size}>Size: Small</MenuItem>
					<MenuItem eventKey="Size: Medium" onSelect={this.onDropdown_size}>Size: Medium</MenuItem>
          <MenuItem eventKey="Size: Large" onSelect={this.onDropdown_size}>Size: Large</MenuItem>
				</DropdownButton>
        <DropdownButton id="sortDropdown" title={this.state.sort}>
					<MenuItem eventKey="Sort By: Alphabetical" onSelect={this.onDropdown_sort}> Sort By: Alphabetical </MenuItem>
					<MenuItem eventKey="Sort By: Loyalty - High to Low" onSelect={this.onDropdown_sort}>Sort By: Loyalty - High to Low</MenuItem>
          <MenuItem eventKey="Sort By: Loyalty - Low to High" onSelect={this.onDropdown_sort}>Sort By: Loyalty - Low to High</MenuItem>
				</DropdownButton>
        <Button id="resetButton" onClick={this.onReset}> Reset </Button>
				<input type="test" placeholder="Search" onChange={this.onSearch}/>
				<List items={this.props.items.filter(this.filterItem)} />
			</div>
		);
	}
}

export default FilteredList;
