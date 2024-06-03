import React from 'react';
import { CarOutlined, CalendarOutlined, EnvironmentOutlined, ToolOutlined, TagsOutlined } from '@ant-design/icons';
import Badge from './Badge';
import VehicleStatus from './Vehicle_Status';

const VehicleDetail = ({ vehicle }) => {
  if (!vehicle) return null;

  return (
    <div className="bg-main-light dark:bg-main-dark shadow-md h-full flex flex-col p-6 space-y-4 pl-6">
      <div className="flex items-center space-x-4 mb-4 pl-6">
        <CarOutlined className="text-4xl text-primary-light dark:text-primary-dark" />
        <h2 className="text-4xl font-bold text-primary-light dark:text-primary-dark">{vehicle.registration}</h2>
      </div>
      <div className="space-y-4 pl-6">
        <div className="flex space-x-4 text-primary-light dark:text-primary-dark">
          <div className="w-40 flex items-center space-x-2">
            <EnvironmentOutlined className="text-lg" />
            <span className="font-semibold">Location:</span>
          </div>
          <div className="flex items-center">{vehicle.location}</div>
        </div>
        <div className="flex space-x-4 text-primary-light dark:text-primary-dark">
          <div className="w-40 flex items-center space-x-2">
            <CalendarOutlined className="text-lg" />
            <span className="font-semibold">Last updated:</span>
          </div>
          <div className="flex items-center">{vehicle.lastUpdated}</div>
        </div>
        <div className="flex space-x-4 text-primary-light dark:text-primary-dark">
          <div className="w-40 flex items-center space-x-2">
            <ToolOutlined className="text-lg" />
            <span className="font-semibold">Make:</span>
          </div>
          <div className="flex items-center">{vehicle.make}</div>
        </div>
        <div className="flex space-x-4 text-primary-light dark:text-primary-dark">
          <div className="w-40 flex items-center space-x-2">
            <TagsOutlined className="text-lg" />
            <span className="font-semibold">Model:</span>
          </div>
          <div className="flex items-center">{vehicle.model}</div>
        </div>
        <div className="flex space-x-4 text-primary-light dark:text-primary-dark">
          <div className="w-40 flex items-center space-x-2">
            <CalendarOutlined className="text-lg" />
            <span className="font-semibold">Status:</span>
          </div>
          <div className="flex items-center">
            <VehicleStatus status={vehicle.status} />
          </div>
        </div>
      </div>
      <div className="mt-6 flex-grow pl-6">
        <h3 className="text-xl font-bold text-primary-light dark:text-primary-dark mb-4">Open Cases</h3>
        {vehicle.cases.map((caseItem) => (
          <div key={caseItem.id} className="text-primary-light dark:text-primary-dark flex items-center space-x-2 mb-2">
            <p className="relative">{caseItem.id}</p>
            <Badge status={caseItem.status} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehicleDetail;
