import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import BeerItem from "./BeerItem";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import ReactTable from "react-table";
import "react-table/react-table.css";

class BeerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
      breweries: []
    };
  }

  componentDidMount() {
    // Fetching the breweries from the mock API
    fetch("data/breweries.json")
      .then(r => r.json())
      .then(data => {
        this.setState({ breweries: data });
      });
    // Fetching the breers from the mock API
    fetch("data/beers.json")
      .then(r => r.json())
      .then(data => {
        data.map(item => {

          // Mapping the beers with their breweries to avoid doing lookups later on.
          let result = this.state.breweries.filter(brewery => {
            return brewery.id === item.brewery_id;
          })[0];

          if (result != null) {
            item["brewery_name"] = result.name;
          }
        });
        // Adding our dataset to the local state of this component.
        this.setState({ beers: data });
      });
  }

  render() {
    // Setting up our columns for react-tables.
    const columns = [
      {
        Header: "id",
        accessor: "id"
      },
      {
        Header: "name",
        accessor: "name",
        filterMethod: (filter, row) => row[filter.id].includes(filter.value)
      },
      {
        Header: "Style",
        accessor: "style_name"
      },
      {
        Header: "ABV",
        accessor: "abv",
        Filter: ({ filter, onChange }) => (
          <input
            type="range"
            max="20"
            min="0"
            onChange={event => onChange(event.target.value)}
            style={{ width: "100%" }}
            value={filter ? filter.value : "all"}
          />
        )
      },
      {
        Header: "Brewery",
        accessor: "brewery_name"
      }
    ];

    return (
      <div>
        <ReactTable
          filterable
          data={this.state.beers}
          columns={columns}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

export default BeerList;
