import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TabSelector = ({ tabs, onSelect }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    onSelect(tab);
  };

  return (
    <div className="flex">
      {tabs.map((tab) => (
        <button
          key={tab.name}
          className={`py-2 px-4 text-sm ${activeTab === tab ? 'border-b-2 border-primary-light dark:border-primary-dark text-primary' : 'text-gray-600'}`}
          onClick={() => handleTabClick(tab)}
        >
            <FontAwesomeIcon icon={tab.icon} className='mr-2'/>
          {tab.name}
        </button>
      ))}
    </div>
  );
};

export default TabSelector;
