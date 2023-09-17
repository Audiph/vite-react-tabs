import React from 'react';

const CompanyName = ({ name, activeId, activeTab, companyNames }) => {
  const isActive = companyNames.indexOf(name) === activeId;
  return (
    <button
      className={isActive ? 'job-btn active-btn' : 'job-btn'}
      onClick={() => activeTab(companyNames.indexOf(name))}
    >
      {name}
    </button>
  );
};

export default CompanyName;
