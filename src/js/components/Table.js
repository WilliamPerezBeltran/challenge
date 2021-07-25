import React, { Component } from "react";
import * as FetchData from "../services/FetchData";
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
    };
  }

  componentDidMount = async () => {
    let data = await FetchData.getAllTrades();
    if (data) {
      this.setState({
        trades: data.data,
        page: data.page,
        pages: data.pages,
        rowsPerPage: data.rowsPerPage,
        total: data.total,
      });
    }
  };

  render() {
    return (
      <div>
        <p>Business information table</p>
        <table>
          <tbody>
            <tr>
              <th>Id</th>
              <th>Comercio</th>
              <th>Cuit</th>
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

            {this.state.trades
              .slice(0, this.state.total)
              .map((trade, tradeId) => {
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
      </div>
    );
  }
}

export default Table;
