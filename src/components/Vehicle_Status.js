import React from "react";

const VehicleStatus = ({ status }) => {
  return (
    <div className="flex items-center h-full">
      <span className={`relative inline-block px-3 font-semibold leading-tight text-sm text-primary`}>
        <span aria-hidden="true" className={`absolute inset-0 ${status === 'In Transit' ? 'bg-green-400' : 'bg-red-400'} opacity-50 rounded-full`}></span>
        <span className="relative">{status}</span>
      </span>
    </div>
  );
}

export default VehicleStatus;
