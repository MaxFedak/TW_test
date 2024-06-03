import React from "react";
import VehicleStatus from "./Vehicle_Status";

const getCaseEmoji = (casesLength) => {
  if (casesLength === 0) {
    return '✅'; // Green checkmark for 0 cases
  } else if (casesLength > 0 && casesLength < 4) {
    return '⚠️'; // Warning emoji for 1-3 cases
  } else {
    return '🚨'; // Red alert for 4 or more cases
  }
};

const DataRow = ({ vehicle, onRowClick, isSelected }) => {
  return (
    <tr
      key={vehicle.id}
      onClick={() => onRowClick(vehicle)}
      className={`cursor-pointer hover:bg-rowHover-light dark:hover:bg-rowHover-dark ${isSelected ? 'border-blue-500' : ''}`}
    >
      <td className="px-5 border-t border-r border-b border-primaryBorder-light dark:border-primaryBorder-dark text-sm">
        <div className="flex items-center h-full text-primary whitespace-no-wrap">
          <span className="text-lg mr-2">🚗</span> {vehicle.registration}
        </div>
      </td>
      <td className="px-5 border border-primaryBorder-light dark:border-primaryBorder-dark text-sm">
        <VehicleStatus status={vehicle.status} />
      </td>
      <td className="px-5 border border-primaryBorder-light dark:border-primaryBorder-dark text-sm">
        <div className="flex items-center h-full text-primary whitespace-no-wrap">{vehicle.lastUpdated}</div>
      </td>
      <td className="px-5 border border-primaryBorder-light dark:border-primaryBorder-dark text-sm">
        <div className="flex items-center h-full text-primary whitespace-no-wrap">{vehicle.location}</div>
      </td>
      <td className="px-5 border border-primaryBorder-light dark:border-primaryBorder-dark text-sm">
        <div className="flex items-center h-full text-primary whitespace-no-wrap">{vehicle.make}</div>
      </td>
      <td className="px-5 border border-primaryBorder-light dark:border-primaryBorder-dark text-sm">
        <div className="flex items-center h-full text-primary whitespace-no-wrap">{vehicle.model}</div>
      </td>
      <td className="px-5 border border-primaryBorder-light dark:border-primaryBorder-dark text-sm">
        <div className="flex items-center h-full text-primary whitespace-no-wrap">
          <button className="bg-transparent border border-primary rounded px-2 text-primary hover:bg-primary hover:text-white">
            View
          </button>
        </div>
      </td>
      <td className="px-5 border-t border-l border-b border-primaryBorder-light dark:border-primaryBorder-dark text-sm">
        <div className="flex items-center h-full text-primary whitespace-no-wrap">
          {getCaseEmoji(vehicle.cases.length)}
        </div>
      </td>
    </tr>
  );
};

export default DataRow;
