import React, { Component } from "react";

class Table extends Component {
  render() {
    return (
      <div>
        <p>Simple table with header</p>
        <table>
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
          <tr>
            <td>xxxxxxx</td>
            <td>xxxxxxx</td>
            <td>xxxxxxx</td>
            <td>xxxxxxx</td>
            <td>xxxxxxx</td>
            <td>xxxxxxx</td>
            <td>xxxxxxx</td>
            <td>xxxxxxx</td>
            <td>xxxxxxx</td>
            <td>xxxxxxx</td>
            <td>xxxxxxx</td>
            <td>xxxxxxx</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Table;
