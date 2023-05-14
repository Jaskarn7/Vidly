import React, { Component } from 'react';
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

class Table extends Component {
    render() {
        const {movies, columns, sortColumn, onSort} = this.props;
        return (
            <table className="table">
        <TableHeader  columns={columns}
                      sortColumn={sortColumn}
                      onSort={onSort}
        />
        <TableBody  data={movies} columns={columns}/>
      </table>
        );
    }
};

export default Table;