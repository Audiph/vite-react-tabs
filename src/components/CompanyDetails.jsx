import React from 'react';
import JobDescription from './JobDescription';

const CompanyDetails = ({ title, dates, duties, company }) => {
  console.log(duties);
  return (
    <article className="job-info">
      <h3>{title}</h3>
      <span className="job-company">{company}</span>
      <p className="job-date">{dates}</p>
      <div>
        {duties.map((item) => {
          return <JobDescription key={duties.indexOf(item)} desc={item} />;
        })}
      </div>
    </article>
  );
};

export default CompanyDetails;
