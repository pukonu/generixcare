import React, { FunctionComponent } from 'react';
import chunk from 'lodash.chunk';

import { TableProps } from 'src/interfaces';
import { TableWrapper } from './styles';

const Table: FunctionComponent<TableProps> = ({ data }) => {
  const chunkedData = chunk(data, 3);

  return (
    <TableWrapper>
      <tbody>
        {chunkedData.map((item, i) => {
          return (
            <tr key={i}>
              {item.map(({ title }) => {
                return <td key={title}>{title}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </TableWrapper>
  );
};

export default Table;
