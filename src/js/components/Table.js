import React, { Component } from "react";
import * as FetchData from "../services/FetchData";
import Filter from "./Filter";
import "./table.css";
class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trades: [],
      companySelected: "",
      page: 0,
      pages: 0,
      rowsPerPage: 0,
      total: 0,
      totalItems: [],
      renderData: [],
      valuesId: [],
      valuesCuit: [],
      valuesTrade: [],
      valuesActive: [
        { label: "activo", value: 1 },
        { label: "inactivo", value: 0 },
      ],
    };
  }

  componentDidMount = async () => {
    let data = await FetchData.getAllTrades();

    if (data) {
      this.splitDataIntoArrayByKey();
      this.setState({
        trades: data.data,
        page: data.page,
        pages: data.pages,
        rowsPerPage: data.rowsPerPage,
        total: data.total,
        totalItems: data.data.slice(0, data.total),
      });
    }
  };

  splitDataIntoArrayByKey = () => {
    let newObject = {};

    this.state.totalItems.forEach((obj) => {
      Object.keys(obj).forEach((key) => {
        newObject[key] = (newObject[key] || []).concat([
          { label: obj[key], value: obj.id },
        ]);
      });
    });

    this.setState({
      valuesId: newObject.id,
      valuesCuit: newObject.cuit,
      valuesTrade: newObject.trade,
    });
  };

  requestSortTrade = () => {
    let sortedByTrade = this.state.totalItems.sort((a, b) => {
      if (a.trade < b.trade) {
        return -1;
      }
      if (a.trade > b.trade) {
        return 1;
      }
      return 0;
    });

    this.setState({
      totalItems: sortedByTrade,
    });
  };

  requestSortCuit = () => {
    let sortedByCuit = this.state.totalItems.sort((a, b) => {
      let as = parseInt(a.cuit.split("-")[0], 10);
      let bs = parseInt(b.cuit.split("-")[0], 10);
      return as - bs;
    });

    this.setState({
      totalItems: sortedByCuit,
    });
  };

  requestSortId = () => {
    let sortedById = this.state.totalItems.sort((a, b) => {
      return a.id - b.id;
    });

    this.setState({
      totalItems: sortedById,
    });
  };

  handleClick = (event) => {
    this.setState({
      page: parseInt(event.target.id, 10),
    });
  };

  render() {
    const indexOfLastTodo = this.state.page * this.state.rowsPerPage;
    const indexOfFirstTodo = indexOfLastTodo - this.state.rowsPerPage;
    const currentTodos = this.state.totalItems.slice(
      indexOfFirstTodo,
      indexOfLastTodo
    );

    const pageNumbers = [];
    for (
      let i = 1;
      i <= Math.ceil(this.state.totalItems.length / this.state.rowsPerPage);
      i++
    ) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map((number) => {
      return (
        <div className="containerPagination" key={number}>
        <div className="pagination" key={number} id={number} onClick={this.handleClick}>
          {number}
        </div>
        </div>
      );
    });

    return (
      <div className="parentContainter">
        <p className="title">Business information table</p>
        <Filter
          valuesId={this.state.valuesId}
          valuesCuit={this.state.valuesCuit}
          valuesTrade={this.state.valuesTrade}
          valuesActive={this.state.valuesActive}
        />
        <table className="table table-striped">
          <tbody>
            <tr>
              <th>
                Id
                <button type="button" onClick={() => this.requestSortId()}>
                  order
                </button>
              </th>

              <th>
                Comercio
                <button type="button" onClick={() => this.requestSortTrade()}>
                  order
                </button>
              </th>
              <th>
                Cuit
                <button type="button" onClick={() => this.requestSortCuit()}>
                  order
                </button>
              </th>
              <th>Concepto 1</th>
              <th>Concepto 2</th>
              <th>Concepto 3</th>
              <th>Concepto 4</th>
              <th>Concepto 5</th>
              <th>Concepto 6</th>
              <th>Balance actual</th>
              <th>Activo</th>
              <th>Última venta </th>
            </tr>

            {currentTodos.map((trade, tradeId) => {
              return (
                <tr key={tradeId}>
                  <td>{trade.id}</td>
                  <td>{trade.trade}</td>
                  <td>{trade.cuit}</td>
                  <td>{trade.concept1}</td>
                  <td>{trade.concept2}</td>
                  <td>{trade.concept3}</td>
                  <td>{trade.concept4}</td>
                  <td>{trade.concept5}</td>
                  <td>{trade.concept6}</td>
                  <td>{trade.actualBalance}</td>
                  <td>{trade.active ? 1 : 0}</td>
                  <td>{trade.lastSale}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

         <div className="containerPagination" >
        {renderPageNumbers}
        </div>



       
      </div>
    );
  }
}

export default Table;
