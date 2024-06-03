import React from 'react';

const Header = () => {
  return (
    <header className="bg-main-light dark:bg-main-dark">
      <div className="container mx-auto px-6 py-6">
        <div className="text-3xl font-bold text-primary-light dark:text-primary-dark">Monitoring Dashboard</div>
      </div>
    </header>
  );
};

export default Header;
