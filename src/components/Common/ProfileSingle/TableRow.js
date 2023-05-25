import React from 'react';

const Table_Row = (props) => {
    return (
      <tr>
        <td>{props.name}</td>
        <td>{props.value}</td>
      </tr>
    );
};

export default Table_Row;