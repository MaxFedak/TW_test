import React from 'react';
import DataRow from './Data_Row';
import TableHeader from './Table_Heaader';
import { headers } from "../data";

const Table = ({ vehicles, onRowClick }) => {
  return (
    <div className="rounded-lg shadow-md">
      <table className="min-w-full leading-normal">
        <TableHeader headers={headers} />
        <tbody>
          {vehicles.map((vehicle) => (
           <DataRow vehicle={vehicle} onRowClick={onRowClick} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
