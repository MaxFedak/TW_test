import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TableHeader = ({ headers }) => {
  return (
    <thead>
      <tr>
        {headers.map((header, index) => (
          <th
            key={header.text}
            className={`px-5 border-t border-b ${index !== 0 ? 'border-l' : ''} ${index !== headers.length - 1 ? 'border-r' : ''} border-primary text-left text-sm font-semibold text-primary tracking-wider`}
          >
            <FontAwesomeIcon icon={header.icon} className="mr-2" />
            {header.text}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
