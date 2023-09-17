import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

const JobDescription = ({ desc }) => {
  return (
    <div className="job-desc">
      <FaAngleDoubleRight />
      <p>{desc}</p>
    </div>
  );
};

export default JobDescription;
