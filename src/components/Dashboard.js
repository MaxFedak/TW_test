import React, { useState } from 'react';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import Header from './Header';
import Table from './Table';
import VehicleDetail from './VehicleDetail';
import { vehicles, tabs } from '../data';
import TabSelector from './Table_selector';

const Dashboard = () => {
  const [isPaneOpen, setIsPaneOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const onTabChange = tab => { console.log(tab.name) };

  const handleRowClick = (vehicle) => {
    setSelectedVehicle(vehicle);
    setIsPaneOpen(true);
  };

  return (
    <div className="bg-main-light dark:bg-main-dark min-h-screen text-white">
      <Header />
      <main className="container mx-auto px-6 py-12">
        <div className="w-full">
          <TabSelector tabs={tabs} onSelect={onTabChange} />
        </div>
        <div className="w-full">
          <Table vehicles={vehicles} onRowClick={handleRowClick} />
        </div>
        <SlidingPane
          isOpen={isPaneOpen}
          title={null}
          from="right"
          width="50%"
          hideHeader={true}
          onRequestClose={() => setIsPaneOpen(false)}
          className="reset-paddings "
        >
          <VehicleDetail vehicle={selectedVehicle} />
        </SlidingPane>
      </main>
    </div>
  );
};

export default Dashboard;
