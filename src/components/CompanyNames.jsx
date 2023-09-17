import React from 'react';
import CompanyName from './CompanyName';

const CompanyNames = ({ companyNames, activeTab, activeId }) => {
  return (
    <div className="btn-container">
      {companyNames.map((name) => {
        return (
          <CompanyName
            key={companyNames.indexOf(name)}
            name={name}
            activeTab={activeTab}
            activeId={activeId}
            companyNames={companyNames}
          />
        );
      })}
    </div>
  );
};

export default CompanyNames;
