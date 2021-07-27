import React, { Component } from "react";
import Select from "react-select";
import "./filter.css";
import * as FetchData from "../services/FetchFilterData";
class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idSelected: "",
      cuitSelected: "",
      tradeSelected: "",
      activeSelected: Boolean,
    };
  }
  dataIds = () => {
    return this.props.valuesId;
  };

  dataCuits = () => {
    return this.props.valuesCuit;
  };

  dataTrades = () => {
    return this.props.valuesTrade;
  };

  dataActive = () => {
    return this.props.valuesActive;
  };

  onChangeId = (option) => {
    this.setState({ idSelected: option });
  };

  onChangeCuits = (option) => {
    this.setState({ cuitSelected: option });
  };

  onChangeTrade = (option) => {
    this.setState({ tradeSelected: option });
  };

  onChangeActive = (option) => {
    this.setState({ activeSelected: option });
  };

  getFilteredData = async () => {
    if (
      this.state.idSelected != "" &&
      this.state.cuitSelected != "" &&
      this.state.tradeSelected != ""
    ) {
      let data = await FetchData.filterData(
        this.state.idSelected.label,
        this.state.cuitSelected.label,
        this.state.tradeSelected.label,
        this.state.activeSelected.label === "activo" ? 1 : 0
      );
    } else {
      alert("campos vacios por favor llenar los filtros");
    }
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="sub-container">
            <p>ids</p>
            <Select
              width="200px"
              onChange={this.onChangeId}
              options={this.dataIds()}
              value={this.state.idSelected}
            />
          </div>

          <div className="sub-container">
            <p>Cuit</p>
            <Select
              width="200px"
              onChange={this.onChangeCuits}
              options={this.dataCuits()}
              value={this.state.cuitSelected}
            />
          </div>

          <div className="sub-container">
            <p>Trade</p>
            <Select
              width="200px"
              onChange={this.onChangeTrade}
              options={this.dataTrades()}
              value={this.state.tradeSelected}
            />
          </div>

          <div className="sub-container">
            <p>Active</p>
            <Select
              width="200px"
              onChange={this.onChangeActive}
              options={this.dataActive()}
              value={this.state.activeSelected}
            />
          </div>
        </div>

        <div className="container">
          <button className="button" onClick={this.getFilteredData}>
            filter data
          </button>
        </div>
      </div>
    );
  }
}

export default Filter;
